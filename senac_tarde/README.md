 - baixar powershell loja de aplicativos win store
 - criar uma pasta na area de trabalho
 - baixar o typescript global: npm install -g typescript
 - verificar caminho do path do typescript global: npm list -g typestript
 - copiar o caminho do path e pesquisar por ambiente variaveis para sua conta e alterar o path com o link copiado e em seguida ok ok
  - npm init -y para inicializar o typescript
  - em seguida, tsc --init para configurar o typescript, se tudo ocorreu bem, aparecerá um arquivo com tsconfig.json na cor azul.
  - Criar os diretorios:
	- dist - mkdir dist
	- src - mkdir src
  - em tsconfig.json:
	target: ESnext
	rootDir: "./src"
	outDir: "./dist"
  - Para testar criar um arquivo com a extensão .ts 
  - Para iniciar o interpretador em modo de assistir usar
	tsc --watch