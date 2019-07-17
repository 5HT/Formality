## Formality Net (FM-NET)

Formality's interaction net system. It is designed to be an efficient runtime for [FM-Core](/docs/FM-Core.md). It extends [EA-Net](/docs/EA-Net.md) with native pairs and 32-bit numeric primitives. It is designed to be a space/time efficient runtime, with each pair/lambda node using 128 bits, erasure/numeric nodes being unboxed, and all operations taking constant space/time. We aim to optimize FM-NET as much as possible, implementing low level LLVM/CUDA/FPGA targets. 

[Check its documentation!](https://docs.formality-lang.org/en/latest/runtime/Formality-Net.html)