# Express

I changed the run config for nodemon to:

    ```"exec": "tsc -p . && node ./dist/server.js"```
In package.json I also added

```"type": "module"```
otherwise, the compiler wouldn't recognise that it's a module, and therefore throw a compiletime error.
