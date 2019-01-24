var expect = chai.expect;


describe('Restaurant', function() {
    describe('ReservarHorario', function() {
        it('Ingresa horario no existente. No hace nada. Total de horarios = 3.', function() {
            aplicacion.listado.restaurantes[0].reservarHorario("12:00");
            expect(aplicacion.listado.restaurantes[0].horarios.length).to.equal(3);
        });
        it('Ingresa cualquier string. No hace nada. Total de horarios = 3.', function() {
            aplicacion.listado.restaurantes[0].reservarHorario("bla");
            expect(aplicacion.listado.restaurantes[0].horarios.length).to.equal(3);
        });
        it('Ingresa horario existente. Lo elimna del array. Total de horarios = 2.', function() {
            aplicacion.listado.restaurantes[0].reservarHorario("13:00");
            expect(aplicacion.listado.restaurantes[0].horarios.length).to.equal(2);
        });
    });
});