# Neovim lsp race repro

Steps to repro

1. install typescript language server
    `npm i -g typescript-language-server`
2. install cssmodules language server
    `npm i -g cssmodules-language-server`
3. Enable both in your neovim by calling

    ```lua
    require('lspconfig').tsserver.setup()
    require('lspconfig').cssmodules_ls.setup()
    ```

4. open `src/index.ts`
5. place cursor on `blue` and call `vim.lsp.buf.definiton()`

You will see that the open buffer now is either `styles.module.css` or `styles.d.ts`, if you press `<C-o>`, you go to the other file from the two. One more `<C-o>` will return you to `src/index.ts`
