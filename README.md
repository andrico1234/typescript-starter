# Second Nature Technical Challenge

This is the technical test for the spec defined [here](https://secondnature.slite.com/p/note/AZLhMhgHnGMJyfjBH1W57d).

This test has taken the form of a test suite, that takes the input from the `data.json` file, and runs it through the algorithm.

## Running the test

- Download the repo
- Run `yarn` to install the dependencies
- Run `yarn test` to fire off the test suite

## Todo After Initial Implementation

- [ ] Explore setting the foundations for a machine learning model
- [ ] Use something like the [Levenshetein Algorithm](https://dzone.com/articles/the-levenshtein-algorithm-1) to handle spell checking or similar spellings.

## Notes

First implementation is a brute force algorithm.
The idea is to split up each string in the array.
Make all synonyms consistent
Logically group words

## Thought process

### Step One: Clean input

- Lowercase all of the values
- Turn the quantities into numbers
- 

Aside from a handle of abbreviations (veg/vegetable) all that seems to be necessary for 80%+ of the work is to singularise the words.


### Step Two: Logically Group Words

Logically group words. 

e.g. input of "120g tender-stem broccoli steamed", will return `["120g", "tender-stem broccoli", "steamed"]`

### Step Three: Classify Grouped Words

### Step Four: Format Data

## Data Structures

### Tries for logically grouping words


### Breaking up by semantics
- quantity
- ingredient
- unit
- action

### Searching synonyms
How can I do this with little hardcoding?



## References

[Slack's Reminder API](https://slack.com/intl/en-gb/help/articles/208423427-Set-a-reminder)