const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');

// Compile local TypeScript for Node's built-in test runner without another runtime.
module.exports = function loadTypeScript(entry) {
  const cache = new Map();
  function load(filename) {
    filename = path.resolve(filename);
    if (cache.has(filename)) return cache.get(filename).exports;
    const mod = new Module(filename, module);
    mod.filename = filename;
    mod.paths = Module._nodeModulePaths(path.dirname(filename));
    cache.set(filename, mod);
    const nativeRequire = mod.require.bind(mod);
    mod.require = id => {
      const localPath = id.startsWith('@/') ? path.resolve(id.slice(2)) : id.startsWith('.') ? path.resolve(path.dirname(filename), id) : null;
      if (localPath && fs.existsSync(`${localPath}.ts`)) return load(`${localPath}.ts`);
      return nativeRequire(id);
    };
    const { outputText } = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
    });
    mod._compile(outputText, filename);
    return mod.exports;
  }
  return load(entry);
};
