describe('app', function () {
    'use strict';

    var app = window.app;

    describe('generateMessage', function () {
        it('should return number of vowels and  true ', function(){
            expect(app.generateMessage('kajak')).toEqual({vowel:2, palindrome:true});
            expect(app.generateMessage('ala')).toEqual({vowel:2, palindrome:true});
            expect(app.generateMessage('seedees')).toEqual({vowel:4, palindrome:true});
        });
        it('should return number of vowels ans false',function(){
            expect(app.generateMessage('kokos')).toEqual({vowel:2, palindrome:false});
            expect(app.generateMessage('Kowalski')).toEqual({vowel:3, palindrome:false});
            expect(app.generateMessage('wyraz')).toEqual({vowel:2, palindrome:false});
        });
        it('should throw exception when argument is empty String', function(){
            expect(app.generateMessage('')).toEqual(new Error('Empty string!'));
        })
    });

    describe('isPalindrome', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function(){
                spyOn(app, 'isPalindrome');
                app.generateMessage('kajak');
            });
            it('should call isPalindrome function', function(){
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('kajak');
            });
        });

        describe('and.callThrough', function () {
            beforeAll(function () {
               spyOn(app, 'isPalindrome').and.callThrough();
                app.generateMessage('wyraz');
            });
            it('should call isPalindrome function when generateMessage function is called',function(){
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith();
            });
        });

        describe('and.returnValue', function () {
            var czy_ok=true;
            beforeAll(function(){
               spyOn(app,'isPalindrome').and.returnValue(true);
            });
            it('should call isPalindrome and return true',function(){
                 czy_ok = app.isPalindrome('zaraz');
                expect(czy_ok).toBe(true);
            });
            it('should call generateMessage and isPalindrome should return true',function(){
                czy_ok = app.generateMessage('zaraz');
                expect(czy_ok).toEqual({vovel:2 ,palindrome:true})
            });
        });

        describe('and.callFake', function () {
            var czy_ok=true;
            beforeAll(function(){
                spyOn(app,'isPalindrome').and.callFake(function(str){
                    var strTemp = 'kajak',  //str.toLowerCase(),
                        strLength = strTemp.length;
                    if (str === '') {
                        return false;
                    }
                    var halfLength = (strLength % 2 === 0) ? (strLength / 2) : ((strLength - 1) / 2);
                    for (var i = 0; i < halfLength; i++) {
                        if (strTemp[i] !== strTemp.slice(-1 - i)[0]) {
                            return false;
                        }
                    }
                    return true;
                });
            });
            it ('should call isPalindrome fake function',function(){
                czy_ok= app.isPalindrome('nowy');
                expect(czy_ok).toBe(true);
            });
            it('should call generateMessage and isPalindrome fake function',function(){
                czy_ok = app.generateMessage('nowy');
                expect(age).toEqual({vovel:1,palindrome:true})
            });
        });

        describe('calls.count()', function () {
            var czy_ok=true;
            beforeAll(function(){
                spyOn(app,'isPalindrome').and.callThrough();
            });
            it('should notice that isPalindrome function is call',function(){
                czy_ok = app.isPalindrome('jeden');
                expect(app.isPalindrome).calls.count().toBe(1);
            });
            it('should notice that isPalindrome is call when generateMesage is call',function(){
                czy_ok=app.generateMessage('jeden');
                expect(app.isPalindrome('jeden').calls.count()).toEqual(2);
            });
        });
    });

    describe('vowelCount', function () {

        describe('toHaveBeenCalled', function () {

        });

        describe('and.callThrough', function () {

        });

        describe('and.returnValue', function () {

        });

        describe('and.callFake', function () {

        });

        describe('calls.count()', function () {

        });
    });

});

