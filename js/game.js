window.addEventListener('load', function () {

    class TestScene extends Phaser.Scene {
        create() {
            this.add.text(100, 200, 'Phaser läuft!', {
                font: '32px Arial',
                fill: '#ffffff'
            });
        }
    }

    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 450,
        backgroundColor: '#000000',
        parent: 'game-container',
        scene: [TestScene]
    };

    new Phaser.Game(config);

});
