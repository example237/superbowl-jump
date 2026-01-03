class NameScene extends Phaser.Scene {
    constructor() { super('NameScene'); }
    create() {
        this.add.text(200, 150, 'Name eingeben', { font: '32px Arial', fill: '#fff' });
    }
}

class GameScene extends Phaser.Scene {
    constructor() { super('GameScene'); }
    create() {
        this.add.text(200, 200, 'Spiel läuft', { font: '32px Arial', fill: '#0f0' });
    }
}

class QuizScene extends Phaser.Scene {
    constructor() { super('QuizScene'); }
    create() {
        this.add.text(200, 200, 'Quiz', { font: '32px Arial', fill: '#ff0' });
    }
}

class EndScene extends Phaser.Scene {
    constructor() { super('EndScene'); }
    create() {
        this.add.text(
            100,
            200,
            'Super Bowl Party am 08.02.2026',
            { font: '28px Arial', fill: '#fff' }
        );
    }
}
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 450,
    backgroundColor: '#000000',
    physics: {
        default: 'arcade',
        arcade: { gravity: { y: 900 } }
    },
    scene: [NameScene, GameScene, QuizScene, EndScene]
};
new Phaser.Game(config);

