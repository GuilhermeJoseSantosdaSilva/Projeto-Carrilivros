var HeaderCtrl = function($scope) {
	$scope.appDetails = {
		title: "Carrilivros",
		tagline: "Temos o livro certo para você"
	};
}

var BookListCtrl = function($scope) {
	$scope.books = [{
		url: "(img/life-or-death.jpeg)",
		titulo: "O Vendedor de Sonhos",
		preco: "205 reais",
		avaliacao: "4 estrelas",
		editora: "Casa do livro",
		classificacao: "14 anos",
		lancamento: "22-02-2020"
	},
	{
		url: "(img/geronimo.jpeg)",
		titulo: "Em busca de Geronimo",
		preco: "112 reais",
		avaliacao: "3 estrelas",
		editora: "Casa do livro",
		classificacao: "10 anos",
		lancamento: "22-02-2020"
	}
];
	$scope.addToKart = function(book){
		console.log("add to Kart: ", book);
	}

}
