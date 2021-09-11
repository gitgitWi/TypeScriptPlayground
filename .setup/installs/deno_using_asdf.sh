# Install Deno
asdf plugin add deno
DENO_LATEST=$(asdf latest deno)
asdf install deno $DENO_LATEST
asdf global deno $DENO_LATEST
echo "Deno installed! version: $(DENO_LATEST) "
