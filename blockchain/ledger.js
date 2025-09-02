// 0G Pay Ledger (Outline)
class Ledger {
    constructor() {
        this.blocks = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return {
            index: 0,
            timestamp: Date.now(),
            transactions: [],
            previousHash: '0',
            hash: 'genesis',
        };
    }

    getBlocks() {
        return this.blocks;
    }

    getHeight() {
        return this.blocks.length - 1;
    }

    addBlock(block) {
        this.blocks.push(block);
    }
}

module.exports = { Ledger };
