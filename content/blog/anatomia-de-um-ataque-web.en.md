---
title: "Anatomy of a web attack: How a PHP and MySQL vulnerability led to Server Compromise"
date: "2026-08-07"
excerpt: "Understand the technical analysis of a real incident where SQL Injection and Command Injection (RCE) flaws allowed full compromise of a PHP/MySQL server, and learn key mitigation strategies."
image: "/images/blog/anatomia-de-um-ataque-web.jpg"
category: "Defensive Security"
author: "Gabriel Soares"
authorRole: "Software & Security Engineer"
---

## Anatomy of a Web Attack: How a PHP and MySQL vulnerability led to Server Compromise

In today's cybersecurity landscape, legacy web applications or systems built without proper input validation represent one of the primary entry points for cybercriminals. At **GS Edge**, we recently analyzed an incident in which a server running a **PHP and MySQL** application was completely compromised.

In this article, we detail step-by-step how attackers exploited the application and, more importantly, which technical controls should be implemented to permanently mitigate these flaws.

---

## How the Attack Occurred

The incident occurred in two distinct stages, combining **SQL Injection (SQLi)** to gain initial access and **Command Injection** for lateral movement and arbitrary code execution.

![Technical diagram of SQL Injection and Command Injection vulnerability](/images/blog/anatomia-de-um-ataque-web.jpg)

```
[Attacker] ──(1. SQL Injection on Login)──> [Authentication Bypassed]
    │
    └───(2. Command Injection via URL)────> [OS Command Execution / RCE]
```

### 1. Authentication Bypass via Login Form (SQL Injection)

The attack originated on the application's login screen. The attacker exploited the absence of input sanitization and query parameterization in MySQL database calls.

By injecting a typical malicious payload into the username field — such as `' OR '1'='1` —, the logic of the original SQL statement was modified. Since the expression `'1'='1'` always evaluates to true, the database bypassed password verification, allowing the attacker to authenticate as administrator without valid credentials.

### 2. Command Injection via URL (Command Injection / RCE)

Once inside the restricted administrative area, the attacker identified parameters exposed via HTTP `GET` methods in the URL (for example: `http://company.com/admin.php?ping=127.0.0.1`).

The PHP application internally used system execution functions to process these inputs without prior validation. By chaining operating system commands directly in the URL (e.g., using `;`, `&&`, or `|`), the attacker executed arbitrary OS commands on the web server. This vulnerability resulted in full Remote Code Execution (RCE) and system takeover.

---

## Remediation and Secure Coding Best Practices

Remediating this class of security incidents requires a defense-in-depth approach spanning secure coding, system hardening, and network protection.

### 1. Preventing SQL Injection

The fundamental rule for preventing SQLi is to **strictly separate SQL code from user-supplied data**.

* **Use Prepared Statements (PDO or MySQLi):** Never concatenate user input directly into SQL queries. Prepared statements ensure that user inputs are treated strictly as data parameters rather than executable code.

**Secure PDO Implementation Example:**
```php
// Prepare SQL statement with named parameters
$stmt = $pdo->prepare('SELECT id, password_hash FROM users WHERE email = :email');

// Safely execute with bound input
$stmt->execute(['email' => $inputEmail]);
$user = $stmt->fetch();

// Secure password verification
if ($user && password_verify($inputPassword, $user['password_hash'])) {
    // Successful authentication
}
```

* **Password Management:** Store passwords using modern, resistant hashing algorithms such as **Argon2id** or **Bcrypt**, implemented natively in PHP via `password_hash()` and `password_verify()`.

---

### 2. Preventing Command Injection

To prevent arbitrary OS command execution via URL parameters or forms:

* **Avoid System Functions:** Minimize or eliminate the use of PHP system execution functions such as `exec()`, `shell_exec()`, `system()`, `passthru()`, and `eval()`. Native PHP APIs exist for almost all common file and system operations.
* **Strict Validation and Whitelisting:** If accepting URL parameters is necessary (such as dynamic module loading), validate input against an explicit whitelist of allowed values.
* **Input Escaping:** When passing arguments to external system binaries is unavoidable, use native escaping functions like `escapeshellcmd()` and `escapeshellarg()`.

---

### 3. Infrastructure and Network Layer Defenses

* **Deploy a Web Application Firewall (WAF):** A WAF is essential to inspect, detect, and block malicious payload patterns (such as SQLi and Command Injection signatures) before they reach the web application layer.
* **Principle of Least Privilege:**
  * The MySQL database user assigned to the web application should possess only necessary privileges (e.g., `SELECT`, `INSERT`, `UPDATE`), avoiding administrative roles like `ROOT` or OS file reading/writing privileges.
  * The web server process (e.g., `www-data` or `nobody`) must run with restricted OS permissions, preventing unauthorized access or modification of sensitive system files.

---

## Conclusion & Next Steps

Combining SQL Injection and Command Injection is devastating, turning a routine validation oversight into complete server compromise. Remediation requires refactoring code to use *Prepared Statements*, eliminating direct OS execution calls, and strengthening infrastructure defense controls.

> **Secure your enterprise infrastructure and applications with GS Edge**

At **GS Edge**, we perform secure code reviews, and specialized cybersecurity consulting for high-availability environments.

> Looking to assess your web application security and protect your enterprise against cyber threats?

👉 **[Schedule a Free Technical Assessment](https://calendly.com/gsedge/30min)** with our engineering team, or reach out to us at **[contato@gsedge.com.br](mailto:contato@gsedge.com.br)**.
