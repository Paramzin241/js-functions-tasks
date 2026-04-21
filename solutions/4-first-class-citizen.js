const run = (text) => {
    // BEGIN
    const getLastCharsReversed = (str, num) => 
        str.length < num ? null : str.slice(-num).split('').reverse().join('');
    // END
  
    return getLastCharsReversed(text, 4);
};
  
export default run;