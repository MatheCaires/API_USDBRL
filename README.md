Comentários:

1) Para que a aplicação funcione, é necessário executar dois comandos(terminais diferentes).
    a) Em '../api/' -> python manage.py runserver
    b) Em '../frontend/buscador/' -> npm start
2) Após os dois comenado serem executados, aparecerá a aplicação(interface) automaticamente.
3) Na interface, é necessário escolher uma data e clicar no botão "buscar". 
4) O React irá requisitar as cotações para o Django(banco de dados). Caso não tenha, as cotações serão consultadas pela API do Banco Central e salvas no banco.
5) Assim que os dados são puxados, são apresentados na tela para o usuário.

