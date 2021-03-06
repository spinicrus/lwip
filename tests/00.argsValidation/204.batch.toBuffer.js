// methods should throw errors when arguments are invalid

var should = require("should"),
    lwip = require('../../'),
    imgs = require('../imgs');

describe('batch.toBuffer arguments validation', function() {

    var batch;
    beforeEach(function(done) {
        lwip.open(imgs.jpg.rgb, function(err, img) {
            batch = img.batch().blur(2);
            done(err);
        });
    });

    describe('invalid encoding format', function() {
        it('should throw an error', function() {
            batch.toBuffer.bind(batch, 'jjpeg').should.throwError();
        });
    });

    describe('JPEG params', function() {

        describe('invalid quality: foo', function() {
            it('should throw an error', function() {
                batch.toBuffer.bind(batch, 'jpeg', {
                    quality: 'foo'
                }).should.throwError();
            });
        });

        describe('invalid quality: -1', function() {
            it('should throw an error', function() {
                batch.toBuffer.bind(batch, 'jpeg', {
                    quality: -1
                }).should.throwError();
            });
        });

        describe('invalid quality: 101', function() {
            it('should throw an error', function() {
                batch.toBuffer.bind(batch, 'jpeg', {
                    quality: 101
                }).should.throwError();
            });
        });

    });

    describe('PNG params', function() {

        describe("valid params", function(){

            describe('defaults', function() {
                it('should succeed', function(done) {
                    batch.toBuffer.bind(batch, 'png', done).should.not.throwError();
                });
            });

            describe('none, false, true', function() {
                it('should succeed', function(done) {
                    batch.toBuffer.bind(batch, 'png', {
                        compression: 'none',
                        interlaced: false,
                        transparency: true
                    }, done).should.not.throwError();
                });
            });

            describe('fast, false, true', function() {
                it('should succeed', function(done) {
                    batch.toBuffer.bind(batch, 'png', {
                        compression: 'fast',
                        interlaced: false,
                        transparency: true
                    }, done).should.not.throwError();
                });
            });

            describe('high, false, true', function() {
                it('should succeed', function(done) {
                    batch.toBuffer.bind(batch, 'png', {
                        compression: 'high',
                        interlaced: false,
                        transparency: true
                    }, done).should.not.throwError();
                });
            });

            describe('none, true, true', function() {
                it('should succeed', function(done) {
                    batch.toBuffer.bind(batch, 'png', {
                        compression: 'none',
                        interlaced: true,
                        transparency: true
                    }, done).should.not.throwError();
                });
            });

            describe('fast, true, true', function() {
                it('should succeed', function(done) {
                    batch.toBuffer.bind(batch, 'png', {
                        compression: 'fast',
                        interlaced: true,
                        transparency: true
                    }, done).should.not.throwError();
                });
            });

            describe('high, true, true', function() {
                it('should succeed', function(done) {
                    batch.toBuffer.bind(batch, 'png', {
                        compression: 'high',
                        interlaced: true,
                        transparency: true
                    }, done).should.not.throwError();
                });
            });

            describe('none, false, false', function() {
                it('should succeed', function(done) {
                    batch.toBuffer.bind(batch, 'png', {
                        compression: 'none',
                        interlaced: false,
                        transparency: false
                    }, done).should.not.throwError();
                });
            });

            describe('fast, false, false', function() {
                it('should succeed', function(done) {
                    batch.toBuffer.bind(batch, 'png', {
                        compression: 'fast',
                        interlaced: false,
                        transparency: false
                    }, done).should.not.throwError();
                });
            });

            describe('high, false, false', function() {
                it('should succeed', function(done) {
                    batch.toBuffer.bind(batch, 'png', {
                        compression: 'high',
                        interlaced: false,
                        transparency: false
                    }, done).should.not.throwError();
                });
            });

            describe('none, true, false', function() {
                it('should succeed', function(done) {
                    batch.toBuffer.bind(batch, 'png', {
                        compression: 'none',
                        interlaced: true,
                        transparency: false
                    }, done).should.not.throwError();
                });
            });

            describe('fast, true, false', function() {
                it('should succeed', function(done) {
                    batch.toBuffer.bind(batch, 'png', {
                        compression: 'fast',
                        interlaced: true,
                        transparency: false
                    }, done).should.not.throwError();
                });
            });

            describe('high, true, false', function() {
                it('should succeed', function(done) {
                    batch.toBuffer.bind(batch, 'png', {
                        compression: 'high',
                        interlaced: true,
                        transparency: false
                    }, done).should.not.throwError();
                });
            });

            describe('none, false, auto', function() {
                it('should succeed', function(done) {
                    batch.toBuffer.bind(batch, 'png', {
                        compression: 'none',
                        interlaced: false,
                        transparency: 'auto'
                    }, done).should.not.throwError();
                });
            });

            describe('fast, false, auto', function() {
                it('should succeed', function(done) {
                    batch.toBuffer.bind(batch, 'png', {
                        compression: 'fast',
                        interlaced: false,
                        transparency: 'auto'
                    }, done).should.not.throwError();
                });
            });

            describe('high, false, auto', function() {
                it('should succeed', function(done) {
                    batch.toBuffer.bind(batch, 'png', {
                        compression: 'high',
                        interlaced: false,
                        transparency: 'auto'
                    }, done).should.not.throwError();
                });
            });

            describe('none, true, auto', function() {
                it('should succeed', function(done) {
                    batch.toBuffer.bind(batch, 'png', {
                        compression: 'none',
                        interlaced: true,
                        transparency: 'auto'
                    }, done).should.not.throwError();
                });
            });

            describe('fast, true, auto', function() {
                it('should succeed', function(done) {
                    batch.toBuffer.bind(batch, 'png', {
                        compression: 'fast',
                        interlaced: true,
                        transparency: 'auto'
                    }, done).should.not.throwError();
                });
            });

            describe('high, true, auto', function() {
                it('should succeed', function(done) {
                    batch.toBuffer.bind(batch, 'png', {
                        compression: 'high',
                        interlaced: true,
                        transparency: 'auto'
                    }, done).should.not.throwError();
                });
            });

        });

        describe("invalid params", function(){

            describe('invalid compression - string', function() {
                it('should throw an error', function() {
                    batch.toBuffer.bind(batch, 'png', {
                        compression: 'foo'
                    }, function() {}).should.throwError();
                });
            });

            describe('invalid compression - number', function() {
                it('should throw an error', function() {
                    batch.toBuffer.bind(batch, 'png', {
                        compression: 98
                    }, function() {}).should.throwError();
                });
            });

            describe('invalid interlaced - string', function() {
                it('should throw an error', function() {
                    batch.toBuffer.bind(batch, 'png', {
                        interlaced: 'foo'
                    }, function() {}).should.throwError();
                });
            });

            describe('invalid interlaced - number', function() {
                it('should throw an error', function() {
                    batch.toBuffer.bind(batch, 'png', {
                        interlaced: 55
                    }, function() {}).should.throwError();
                });
            });

        });

    });

});
