describe('web.storage.mock', function() {
    beforeEach(module('web.storage'));

    describe('local storage', function() {
        it('dependency injection', inject(function(localStorage) {
            expect(localStorage).toEqual({});
        }));
    });

    describe('session storage', function() {
        it('dependency injection', inject(function(sessionStorage) {
            expect(sessionStorage).toEqual({});
        }));
    });

    it('local and session storage are not the same', inject(function(localStorage, sessionStorage) {
        localStorage.type = 'local';
        sessionStorage.type = 'session';

        expect(localStorage).toNotEqual(sessionStorage);
    }));
});