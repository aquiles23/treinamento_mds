# Treinamento de Docker para o Time 5

## Guia de Uso do Docker

### Instalação
Primeiramente é necessário ter o docker instalado, caso não tenha acesse o [Instalação docker](https://docs.docker.com/engine/installation/linux/docker-ce/). Após a instalação, configure o docker para rodar em modo usuário, leia as [instruções de pós-instalçao](https://docs.docker.com/engine/install/linux-postinstall/)

### Utilizando o ambiente
&emsp;&emsp; para construir a imagem:
 
 ```terminal
  docker compose build
 ```
 &emsp;&emsp; Para a utilização do ambiente, basta dar o comando abaixo e ele irá ligar o container:
 
 ```terminal
  docker compose up -d
 ```

 &emsp;&emsp; Para acessar o container use o comando abaixo:
 ```terminal
  docker compose exec api sh
 ```

 &emsp;&emsp; Para parar o container use o comando abaixo:
 
  ```terminal
  docker compose stop
 ```
 &emsp;&emsp; E para religar um container parado use o comando: 
 
 ```terminal
  docker compose start
 ```

 &emsp;&emsp; Caso deseje remover um container:
 ```terminal
  docker compose down
 ```

  &emsp;&emsp; Para a visualização dos logs use o comando abaixo:
 ```terminal
  docker compose logs -f
 ```

   &emsp;&emsp; caso não tenha permissão para criar arquivos na pasta do container:
 ```terminal
  sudo chown -R $USER:$USER .
 ```
 