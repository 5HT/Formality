# Formality

A upcoming efficient proof-gramming language. It aims to be:

- **Fast:** no garbage-collection, optimal beta-reduction and a massively parallel GPU compiler make it fast.

- **Safe:** a type system capable of proving mathematical theorems about its own programs make it secure.

- **Portable:** the full language is implemented in a 400-LOC runtime, making it easily available everywhere.

Formality isn't ready yet, but you can already use [Formality-Core](FM-Core), our low-level compile target ([check its wiki!](https://github.com/moonad/formality-javascript/wiki)), and [EA-TT](EA-TT), our underlying proof language.

## Projects

For a better separation of concerns, Formality was broken down into sub-projects:

Features | **Calculus** | **Type-Theory** | **Runtime**
--- | --- | --- | ---
Lam, Box | [EA-Core](EA-Core) | [EA-TT](EA-TT) | [EA-Net](EA-Net)
Lam, Box, Pair, Uint32 | [FM-Core](FM-Core) | FM-TT | [FM-Net](FM-Net)

`FM-Core` is our low-level, untyped compile target, `FM-TT` is our raw type theory and `FM-Net` is our efficient interaction-net runtime. `EA-Core`, `EA-TT` and `EA-Net` are their formalization-friendly counterparts, excluding native ints to be easier to reason about. Formality will be a high-level, Python/Agda-inspired syntax built on top of those. [Here is a sneak peek!](https://gist.github.com/MaiaVictor/489a4119efd49f16605f8d4d09d421ad)

### Progress Table

Note: most reference implementations were written in **JavaScript** simply because it is a cross-platform language, but we plan to re-implement all those things inside **Formality-Core**. Once this is done, we will port them Haskell, Rust, Python etc. by a simple bootstrapping process: 1. implement just the runtime ([FM-Net, a 400-LOC file](https://github.com/moonad/Formality-Core/blob/master/javascript/fm-to-net.js)), 2. load the desired lib on it.

Project | Description | Implementation(s)
--- | --- | ---
EA-Core | Parser, interpreter. | [JavaScript](https://github.com/moonad/Formality-JavaScript/blob/master/EA-Core/ea-core.js) 
EA-Core | EA-Net compiler/decompiler. | [JavaScript](https://github.com/moonad/Formality-JavaScript/blob/master/EA-Core/ea-to-net.js)
EA-Core | Command-line interface. | [JavaScript](https://github.com/moonad/Formality-JavaScript/blob/master/EA-Core/main.js)
EA-Core | Formalization. | [Agda (ongoing)](https://gist.github.com/MaiaVictor/88ebc2d1dc54a8149ae8b8150946803e)
EA-Core | Specification. | [Markdown (ongoing)](EA-Core/spec.md)
EA-Net | Strict and Lazy runtime. | [EA-Core](https://github.com/moonad/Formality-JavaScript/blob/master/EA-Net/ea-net.js)
EA-TT | Parser, interpreter, type-checker. | [JavaScript](https://github.com/moonad/Formality-JavaScript/blob/master/EA-TT/ea-tt.js)
EA-TT | EA-Core compiler/decompiler. | [JavaScript](https://github.com/moonad/Formality-JavaScript/blob/master/EA-TT/ea-tt.js)
EA-TT | Command-line interface. | [JavaScript](https://github.com/moonad/Formality-JavaScript/blob/master/EA-TT/main.js)
EA-TT | Specification. | [Markdown (ongoing)](EA-TT/spec.md)
FM-Core | Parser, interpreter. | [JavaScript](https://github.com/moonad/Formality-JavaScript/blob/master/FM-Core/fm-core.js), [FM-Core (ongoing)](https://github.com/moonad/Formality-JavaScript/blob/master/FM-Core/term.fmc)
FM-Core | FM-Net compiler/decompiler. | [JavaScript](https://github.com/moonad/Formality-JavaScript/blob/master/FM-Core/fm-to-net.js)
FM-Core | JS compiler/decompiler. | [JavaScript](https://github.com/moonad/Formality-JavaScript/blob/master/FM-Core/fm-to-js.js)
FM-Core | Command-line interface. | [JavaScript](https://github.com/moonad/Formality-JavaScript/blob/master/FM-Core/main.js)
FM-Core | Documentation. | [Markdown (ongoing)](https://github.com/moonad/Formality-JavaScript/wiki)
FM-Net | Strict and Lazy runtime. | [JavaScript](https://github.com/moonad/Formality-JavaScript/blob/master/Formality-Net/fm-net.js), [C (ongoing)](https://github.com/moonad/Formality-JavaScript/blob/master/Formality-Net/fm-net.c), [OpenCL (redo)](https://github.com/MaiaVictor/absal-rs/blob/parallel-test-3/src/main.rs), [CUDA (redo)](https://github.com/moonad/Formality-JavaScript/blob/nasic-optimization/Formality/main.cu)
FM-Net | Documentation. | [Markdown (ongoing)](https://github.com/moonad/Formality-JavaScript/wiki/Formality-Net)
FM-TT | Parser, interpreter, type-checker. | FM-Core (todo)
FM-TT | FM-Core compiler/decompiler. | FM-Core (todo)
FM-TT | Specification. | Markdown (todo)
FM-Lang | Parser, interpreter, type-checker. | FM-Core (todo)
FM-Lang | Documentation | Markdown (todo)
LIB | Mutable Arrays. | [FM-Core](https://github.com/moonad/Formality-JavaScript/blob/master/FM-Core/array.fmc)
LIB | Linked lists. | [FM-Core](https://github.com/moonad/Formality-JavaScript/blob/master/FM-Core/list.fmc)
LIB | UTF-8 strings. | [FM-Core](https://github.com/moonad/Formality-JavaScript/blob/master/FM-Core/array.fmc)
LIB | Demo: numeric algorithms. | [FM-Core](https://github.com/moonad/Formality-JavaScript/blob/master/FM-Core/num.fmc)
LIB | Demo: theorems and proofs. | [Elementary Affine Type Theory](https://github.com/moonad/Formality-JavaScript/blob/master/EA-TT/main.eatt)
