const getShortenedName = (name, numerOfBars) => {
    if (numerOfBars < 5) {
      if (name.length > 14) {
        return name.substring(0, 12) + '...';
      }
      return name;
    } else {
      if (name.length > 6) {
        return name.substring(0, 4) + '...';
      }
      return name;
    }
  }

module.exports = getShortenedName;
