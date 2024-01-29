let student = {
  stack: ['HTML'],
  level: 1,
  improveLevel: function () {
    this.level++;
    if (this.level === 2) {
      this.stack.push('CSS');
    } else if (this.level === 3) {
      this.stack.push('JavaScript');
    } else if (this.level === 4) {
      this.stack.push('React');
    } else if (this.level === 5) {
      this.stack.push('NodeJS');
    } else if (this.level > 5) {
      alert('Круто! Студент выучил все технологии!');
    }

    return this;
  },
};
student.improveLevel();
student.improveLevel();
student.improveLevel();
student.improveLevel();
student.improveLevel();
