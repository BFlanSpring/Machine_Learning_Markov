const { MarkovMachine } = require('./markov');

describe('MarkovMachine', () => {
  describe('makeChains method', () => {
    it('should create chains correctly', () => {
      const text = 'the cat in the hat';
      const mm = new MarkovMachine(text);
      const expectedChains = {
        'the': ['cat', 'hat'],
        'cat': ['in'],
        'in': ['the'],
        'hat': [null]
      };
      expect(mm.chains).toEqual(expectedChains);
    });
  });

  describe('makeText method', () => {
    it('should generate random text with the specified word count', () => {
      const text = 'the cat in the hat';
      const mm = new MarkovMachine(text);
      const generatedText = mm.makeText(3);
      const words = generatedText.split(' ');
      expect(words).toHaveLength(3);
    });

    it('should handle null/End of Sentence and continue generating text', () => {
      const text = 'the cat in the hat';
      const mm = new MarkovMachine(text);
      const generatedText = mm.makeText(10);
      expect(generatedText.endsWith('hat')).toBe(false);
    });
  });
});
