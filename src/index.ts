import css from './style.module.css'

console.log(css.blue)
//               ^ `vim.lsp.buf.definition()` here causes races
//                 if you have both tsserver and cssmodules_ls
