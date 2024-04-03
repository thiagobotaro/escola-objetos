let anoAtual = new Date().getFullYear();

const livro = {
    titulo: '',
    autor: '',
    anoPublicacao: 0,
    genero: '',
};

livro['titulo'] = 'O senhor dos anéis';
livro.autor = 'J. R. R. Tolkien';
livro.anoPublicacao = 1954;
livro.genero = 'Fantasia, Aventura';
livro.avaliacao = null;

livro.idadePublicacao = anoAtual - livro.anoPublicacao;

if(livro.avaliacao === null){
    livro.avaliacao = 10;
} else{
    console.log('O livro já possui uma avaliação');
}

console.log(livro);

livro['genero'] = 'Aventura';

console.log(livro);

delete livro.avaliacao;

console.log(livro);

