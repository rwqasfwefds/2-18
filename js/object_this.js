let person = {
    name: '윤인성',
    eat: function(food){
        document.write(this.name + '이 ' + food + '을/를 먹습니다.');
    }
};
person.eat('밥');