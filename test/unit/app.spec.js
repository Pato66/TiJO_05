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

