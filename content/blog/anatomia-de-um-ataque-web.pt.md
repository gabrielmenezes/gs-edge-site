---
title: "Anatomia de um ataque web: Como uma vulnerabilidade em PHP e MySQL permitiu a invasão de um servidor"
date: "2026-08-07"
excerpt: "Entenda a análise técnica de um incidente real onde falhas de SQL Injection e Command Injection (RCE) permitiram o comprometimento total de um servidor PHP com MySQL, e como prevenir essas vulnerabilidades."
image: "/images/blog/anatomia-de-um-ataque-web.jpg"
category: "Segurança Defensiva"
author: "Gabriel Soares"
authorRole: "Software & Security Engineer"
---

## Anatomia de um ataque web: Como uma vulnerabilidade em PHP e MySQL permitiu a invasão de um servidor

No cenário atual de segurança da informação, aplicações web legadas ou desenvolvidas sem o devido controle de entrada de dados representam uma das principais portas de entrada para cibercriminosos. Na **GS Edge**, analisamos recentemente um incidente em que um servidor rodando uma aplicação **PHP com MySQL** foi totalmente comprometido.

Neste artigo, detalhamos o passo a passo de como os atacantes exploraram a aplicação e, mais importante, quais medidas técnicas devem ser adotadas para mitigar essas falhas de forma definitiva.

---

## Como o ataque ocorreu

O incidente ocorreu em duas etapas bem definidas, combinando **SQL Injection (SQLi)** para ganho de acesso e **Command Injection** para movimentação e execução de código.

![Diagrama técnico da vulnerabilidade de SQL Injection e Command Injection](/images/blog/anatomia-de-um-ataque-web.jpg)

```
[Atacante] ──(1. SQL Injection no Login)──> [Autenticação Burlada]
    │
    └───(2. Command Injection via URL)─────> [Execução de Comandos no SO / RCE]
```

### 1. Bypass de autenticação via formulário de Login (SQL Injection)

O ataque começou na tela inicial do sistema. O atacante explorou a ausência de sanitização e de parametrização nas consultas enviadas ao banco de dados MySQL.

Ao inserir uma carga maliciosa (payload) típica no campo de usuário — como `' OR '1'='1` —, a lógica da instrução SQL original foi alterada. Como a expressão `'1'='1'` é sempre verdadeira, a verificação de senha foi ignorada pelo banco de dados, permitindo que o atacante se autenticasse como administrador sem possuir uma credencial válida.

### 2. Injeção e execução de comandos via URL (Command Injection / RCE)

Uma vez dentro da área restrita do sistema, o atacante identificou parâmetros expostos via método HTTP `GET` na URL (por exemplo: `http://empresa.com/admin.php?ping=127.0.0.1`).

A aplicação PHP utilizava internamente funções do sistema para processar esses valores sem a devida validação. Ao encadear comandos do sistema operacional diretamente na URL (ex: utilizando `;`, `&&` ou `|`), o atacante conseguiu executar instruções arbitrárias no servidor web. Essa vulnerabilidade resultou no controle total do ambiente (Remote Code Execution).

---

## Soluções e boas práticas para correção

A remediação desse tipo de incidente exige uma abordagem em camadas, cobrindo tanto a codificação segura quanto a proteção do ambiente e da infraestrutura.

### 1. Prevenção contra SQL injection

A regra fundamental para evitar SQLi é **separar o código da instrução SQL dos dados inseridos pelo usuário**.

* **Utilize Prepared Statements (PDO ou MySQLi):** Nunca concatene variáveis diretamente na instrução SQL. As declarações preparadas garantem que as entradas do usuário sejam tratadas estritamente como dados, e não como código executável.

**Exemplo de implementação segura com PDO:**
```php
// Preparação da instrução SQL com parâmetros nomeados
$stmt = $pdo->prepare('SELECT id, password_hash FROM usuarios WHERE email = :email');

// Execução vinculando o dado enviado de forma segura
$stmt->execute(['email' => $inputEmail]);
$user = $stmt->fetch();

// Validação segura da senha
if ($user && password_verify($inputPassword, $user['password_hash'])) {
    // Autenticação bem-sucedida
}
```

* **Gestão de Senhas:** Armazene senhas no banco utilizando algoritmos de hash robustos como **Argon2id** ou **Bcrypt**, implementados nativamente em PHP via `password_hash()` e `password_verify()`.

---

### 2. Prevenção contra command injection

Para conter a execução de comandos via parâmetros da URL ou formulários:

* **Evite o Uso de Funções de Sistema:** Evite ao máximo utilizar funções do PHP que interagem diretamente com o sistema operacional, como `exec()`, `shell_exec()`, `system()`, `passthru()` e `eval()`. Na maioria dos casos, existem bibliotecas nativas em PHP para realizar a mesma tarefa de forma segura.
* **Validação Rígida e Whitelisting (Listas Permitidas):** Se a passagem de parâmetros via URL for indispensável (como no carregamento de páginas internas), valide a entrada contra uma lista estática de opções permitidas em vez de aceitar entradas genéricas.
* **Sanitização de Entradas:** Caso precise passar argumentos para comandos externos, utilize funções nativas de escape como `escapeshellcmd()` e `escapeshellarg()`.

---

### 3. Proteções a nível de infraestrutura e redes

* **Implementação de WAF (Web Application Firewall):** A adoção de um WAF é crucial para interceptar e bloquear requisições contendo padrões de ataques conhecidos (como assinaturas de SQLi e Command Injection) antes mesmo que atinjam a aplicação PHP.
* **Princípio do menor privilégio:**
  * O usuário do banco de dados MySQL associado à aplicação web deve possuir apenas as permissões estritamente necessárias (ex: `SELECT`, `INSERT`, `UPDATE`), evitando privilégios administrativos como `ROOT` ou permissões para leitura e escrita de arquivos no sistema operacional via MySQL.
  * O processo do PHP/Web Server (ex: `www-data` ou `nobody`) deve rodar com permissões restritas no SO, impedindo a leitura ou modificação de arquivos sensíveis do sistema.

---

## Conclusão e Próximos passos

A combinação de SQL Injection e Command Injection é devastadora, pois transforma uma falha comum de validação em um comprometimento total do servidor. A correção dessas falhas envolve a reestruturação do código para o uso de *Prepared Statements*, a remoção de chamadas diretas ao sistema operacional e o reforço da segurança na infraestrutura.

> **Proteja a infraestrutura e as aplicações da sua empresa com a GS Edge**

Na **GS Edge**, realizamos auditorias de código seguro e consultoria especializada em cibersegurança e infraestrutura de alta disponibilidade.

> Quer avaliar a segurança das suas aplicações web e proteger sua empresa contra invasões?

👉 **[Agende um Diagnóstico Técnico Gratuito](https://calendly.com/gsedge/30min)** com nossos especialistas, ou entre em contato pelo e-mail **[contato@gsedge.com.br](mailto:contato@gsedge.com.br)**.
