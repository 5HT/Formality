const src = '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';
  let buf = null;

  const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
  if (isNode) {
    buf = Buffer.from(src, 'base64');
  } else {
    const raw = window.atob(src);
    const rawLength = raw.length;
    buf = new Uint8Array(new ArrayBuffer(rawLength));
    for(let i = 0; i < rawLength; i++) {
      buf[i] = raw.charCodeAt(i);
    }
  }

  const mod = new WebAssembly.Module(buf);
  const instance = new WebAssembly.Instance(mod);
  module.exports = instance.exports;