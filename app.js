var budgetControlller = (function() {
    var x = 23;

    var add = function (a) {
        return x + a;
    }
    return {
        publicTest : function (b) {
            return add(b);
        }
    }
})();

var UIController = (function () {

})();

var controller = (function (budgetCtrl, UICtrl) {
    //pass other two
    var z = budgetCtrl.publicTest(5);

    return {anotherPublic : function () {
           console.log(z);
        }
    }


})(budgetControlller, UIController);

