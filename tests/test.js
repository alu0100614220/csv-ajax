var expect = chai.expect;

suite("CSV", function() {

    test("Deberia aceptar formato csv", function() {
        var original = 'a,b,c,d\nw,x,y,z';
      var result = calculate(original);
      expect(result).to.be.instanceof(Array);
      expect(result[0].items.toString()).to.equal("a,b,c,d");
      expect(result[1].items.toString()).to.equal("w,x,y,z");
    });

    test("Deberia aceptar formato csv incluyendo saltos de linea", function() {
        var original = '1,2,3,a\n2,3,1';
        var result = calculate(original);
        expect(result).to.be.instanceof(Array);
        expect(result[0].value.toString()).to.equal("1,2,3,a");
        expect(result[1].value.toString()).to.equal("2,3,1");

    });
});
