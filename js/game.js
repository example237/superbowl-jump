class NameScene extends Phaser.Scene {
    constructor() {
        super('NameScene');
    }
    create() {
        this.add.text(200, 200, 'NameScene läuft', {
            font: '32px Arial',
            fill: '#ffffff'
        });

        this.time.delayedCall(2000, () => {
            this.scene.start('GameScene');
        });
    }
}

class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }
    create() {
        this.add.text(200, 200, 'GameScene läuft', {
            font: '32px Arial',
            fill: '#00ff00'
        });
    }
}
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 450,
    backgroundColor: '#000000',
    scene: ['NameScene', 'GameScene']
};
new Phaser.Game(config);
