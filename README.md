CSE508 Information Retrieval

Assignment 1
Report
Ishwar Babu - 2021532

1 Introduction
This report discusses three Python scripts designed for text preprocessing, creation and
usage of an inverted index for boolean queries, and implementation of a positional in-
dex for phrase queries within a dataset of text files. These scripts utilize various data
structures and libraries to efficiently process and query textual data.

2 Data Preprocessing
2.1 Overview
The data preprocessing script is responsible for preparing text data for further analysis or
processing. This involves converting text to lowercase, removing HTML tags, tokenizing,
removing stopwords and punctuation, and eliminating blank space tokens.
2.2 Functionalities

• Text Lowercasing: Converts all text to lowercase to ensure consistency in pro-
cessing.

• HTML Tag Removal: Uses BeautifulSoup to remove HTML tags, leaving only
the text content.
• Tokenization: Splits the text into individual words using NLTK’s word tokenize
function.
• Stopwords Removal: Filters out common words (e.g., ”the”, ”is”, ”in”) that do
not add much meaning to the text.
• Punctuation Removal: Eliminates tokens that are not alphanumeric to focus on
meaningful words.
• Preprocessing and Saving Files: Reads files from a given directory, preprocesses
the text, and saves the preprocessed text to a new directory.

• Random Sample Display: Selects a random subset of preprocessed files to show-
case the preprocessing results.



2.3 Structures Used
• The script uses sets for stopwords to optimize the search and removal process.
• Lists are used to store tokens and file names for iterative processing.
3 Unigram Inverted Index and Boolean Queries
3.1 Overview
This script creates an inverted index from the preprocessed text files, allowing efficient
querying of the dataset with boolean operations (AND, OR, AND NOT, OR NOT).
3.2 Functionalities
• Inverted Index Creation: Builds an inverted index where each word points to a
set of documents containing that word.
• Index Persistence: Saves and loads the inverted index using Python’s pickle
module for persistent storage.
• Boolean Query Processing: Performs boolean queries on the inverted index to
find documents that match the query criteria.
• Query Formatting: Formats and displays the queries along with their results.
3.3 Structures Used
• Utilizes defaultdict from the collections module to easily append files to each word
entry in the index.

• Sets are used to store file names for each word, supporting efficient boolean opera-
tions.

4 Positional Index and Phrase Queries
4.1 Overview

Implements a positional index for processing phrase queries. This index tracks the posi-
tions of each word within documents, enabling precise phrase query matching.

4.2 Functionalities
• Positional Index Creation: Constructs a positional index where each word is
associated with a dictionary. This dictionary maps documents to lists of positions
where the word occurs.
• Index Persistence: Uses pickle to save and load the positional index for reuse.
• Phrase Query Processing: Identifies documents containing the exact sequence
of words in a phrase query by comparing positions.



4.3 Structures Used

• The positional index is a nested defaultdict structure, with the outer level map-
ping words to documents and the inner level mapping documents to lists of word
positions.

• Lists are used to store word positions within documents, facilitating the identifica-
tion of consecutive word sequences.

5 Conclusion
The presented scripts offer a comprehensive approach to preprocessing text data, querying
datasets with boolean logic, and executing precise phrase searches using a positional
index. Each component plays a crucial role in text analysis and information retrieval
systems, demonstrating the effectiveness of Python and its libraries in processing and
searching textual data.
