module.exports = (function init() {
	
	return {
		sum : function sum(num1,num2) {
            num1 = parseInt(num1,10);
            num2 = parseInt(num2,10);
			return num1 + num2;
		},
        minus : function minus(num1,num2) {
            num1 = parseInt(num1,10);
            num2 = parseInt(num2,10);
			return num1 - num2;
		},
        multiply : function sum(num1,num2) {
            num1 = parseInt(num1,10);
            num2 = parseInt(num2,10);
			return num1 * num2;
		},
        divide : function sum(num1,num2) {
            num1 = parseInt(num1,10);
            num2 = parseInt(num2,10);
			return num1 / num2;
		}
	};
    
})();