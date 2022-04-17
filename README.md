#### Projeto Trybers And Dragons

Projeto realizado para o curso de desenvolvimento web da escola Trybe.

#### Tecnologias utilizadas

- Para o projeto foram utilizdos conhecimentos em TypeScript,
tendo como foco o uso de classes, interfaces e tipagem.

#### Iniciando o projeto

- Para ser possível navegar pelo projeto é necessário a instalação de suas 
dependências, para isso utilize o comando:

    npm install

#### Pastas e divisão

O projeto fica inteiramente armazenado na pasta src, sendo dividido em subpastas:

 - Archetypes: define a opção de origem do personagem: Mage, Warrior, Ranger e Necromancer.
 - Battle: Classe dedicada a implementar a luta entre os personagens, podendo ser PVP ou PVE.
 - Races: Define as raças dos personagens: aqui ficam estabelecidas 4 principais (Dwarf, Elf, Halfling e Orc)
 - Character, classe que implementa os personagens de origem humanoide, tendo possibilidade de subir de nível e ter defesa, são diferentes dos monstros quanto a isso, pois esses não podem subir de nível e nem possuem defesa.
 - Dragon: Implementa a classe baseada nos monstros, sendo o inimigo mais forte possivel para um PVE no projeto.

 #### Partes desenvolvidas e partes fornecidas

 Dependências, tsconfig, eslintrc e eslintignore fornecidos pela Trybe, assim como a pasta básica da src.
 Implementação de código feita completamente por mim, falta implementar os testes das classes implementadas.