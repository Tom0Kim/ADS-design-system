Style, grammar, and punctuation
Follow these writing conventions to make your apps and experiences clear, consistent, and localizable.
Atlassian vocabulary
For specific vocabulary and to view our internal word list and glossary, head to go/vocab (Atlassians only).

Style and formatting

Abbreviations
Use the full name of features and apps in customer-facing copy.
Don’t use 'e.g.', ‘i.e.’, ‘etc.’, or '&' as they're not localization friendly and can be confusing for users of assistive technologies.
Do
Ask the experts at Jira Service Desk.

Don’t
Ask the experts at JSD.

Do
Use an input component. For example, a button or a select.

Don’t
Use an input component, e.g. a button or a select etc.


Plural abbreviations
Don’t use an apostrophe for plural abbreviations.

Do
1990s, DVDs

Don’t
1990’s, DVD’s


Articles (a, an, the)
Avoid articles in buttons, labels, and action-based headings in the UI.

Do
Create password

Don’t
Create a password


Bold
Use bold text to draw the reader’s eye to key phrases and statements in your content, though don't over do it.

For in-app copy or help articles, use bold when referring to static UI elements like menu items, buttons, or headings.
If bold is needed but the UI doesn’t support it — for example in a UI message or a flag where the title is already bold — you can use italics.
Do
Go to General configuration then User macros.

Don’t
Go to the settings page and select Configuration.


Capitalization
Use sentence case in all titles, headings, menu items, labels, and buttons.
Capitalize proper nouns in headings, such as names of people, companies, or apps.
Do
Create work item

Don’t
Create Work Item

Do
Add permissions for Arni Karan

Don’t
Add permissions for arni karan


Contractions (shortened words)
Use contractions, where possible, as they convey a conversational, friendly tone.
Use curly apostrophes in UI copy
On a Mac: option + shift + ]
On Windows: Control + ' (or alt + 0146)
Do
We can’t load this page.

Don’t
We cannot load this page.


Date and time
View date and time guidelines.


Gender (he, she, they)
If known, use the pronouns a customer provides. If you don’t know, avoid gendered pronouns wherever possible.
If it’s not possible, use ’they’ or ’their’ rather than ‘his/her’ or ’he/she’.
Do
Ask your admin to add you.

Don’t
Ask your admin if she can add you.

Do
Add permissions to their account.

Don’t
Add permissions to her account.


Headings and titles
Use sentence case. Only capitalize the first word of a sentence, proper nouns, and trademarked names (for example: apps, countries, people's names).
Don’t use bold or italics.
Don't use periods.
Reconsider using question marks. Preferably rephrase the heading so it’s a statement.
Phrase UI and documentation headings with an action verb.
Avoid gerunds (the ‘ing’ form of verbs) in UI copy.
Do
Organize your to-do list with Trello

Don’t
Want to Organize Your To-Do List With Trello?

Do
Add a page to your project

Don’t
Adding a page to your project


Articles in headings
Articles (a, an, the) aren’t always needed in UI headings.
They're better suited to more conversational sections, like product marketing copy and empty states, as they make these sections more approachable and improve understanding.
Do
Create work item

Don’t
Create a work item


Italics
In apps, use italics sparingly as it can be difficult to read. Don’t use italics in hyperlinks.

Italics can be used for:

UI elements that might change, like a field name or user input.
For emphasis if the UI doesn’t support bold. For example, in a flag or UI message.

Lists
Use lists to draw the reader’s eye and make items easier to scan and follow. Try to limit lists to 6 items or less. If there are more items, make multiple lists.


Bulleted list
Use to list options or when the order of the items doesn’t matter.
Phrase each item in a parallel way.
Don’t use commas or periods at the end of each item.
Fragmented sentences
If your list has fragmented sentences, use a lowercase letter for each item and don’t use a period at the end of the list. Use a lead-in sentence with a colon before the items.

Do
Due to security concerns, all employees are required to:
wear an identification tag
use their security pass to enter or leave an office before 7 a.m. and after 6 p.m.
alert security if a suspicious package is found

Don’t
Due to security concerns, all employees are required to;
Wear an identification tag in the building,
You must use your identification tag to enter an office before 7 a.m. and exit after 6 p.m., and
If a suspicious package is found, alert security.

Complete sentences
For lists with complete sentences, start an item with a capital letter and end it with a period. Don’t use a lead-in sentence with a colon.

Do
Atlassian has updated security requirements for employees.
Always wear your identification tag when working in an office.
Use your identification tag to enter an office before 7 am and when you leave after 6 pm.

Don’t
Atlassian has updated security requirements for employees:
always wear your identification tag when working in an office
use your identification tag to enter an office before 7 am and when you leave after 6 pm.


Numbered lists
Use numbered lists for tasks or lists where the order of the items matters. Capitalize the first word of each item and end the item with a period.

Do
To add a new user macro:
Go to Settings then General configuration then User macros.
Choose Create a user macro.
Enter the macro details.

Don’t
To add a new user macro -
go to Settings then General configuration then User macros
choose Create a user macro
enter the macro details.


Monospaced text
Use monospaced font for names of a file or directory. It’s mostly used in attributes, strings, and administrator and developer docs.

Do
The location of the Home directory is stored in a configuration file calledconfluence-init.properties.

Don’t
The location of the Home directory is stored in a configuration file called confluence-init.properties.


Numbers
Use digits rather than words in most cases.

Exceptions:

If a number starts a sentence, write it out.
In common expressions, write the number out. For example: It’s one thing after another.
When writing long-form or formal content, write out numbers one to nine.
Write out the numbers ‘zero’ and ‘one’ if it could be confused for the letters L, I, or O.
Do
Your password should be a minimum of 8 characters.

Don’t
Your password should be a minimum of eight characters.

Do
Loom is one of the best apps for sharing information in a personal way.

Don’t
Loom is 1 of the best apps for sharing information in a personal way.


Number ranges
Use ’to’ and not hyphens in number ranges, except if space is limited, like in a table or mobile app.

Do
View rows 1 to 4 in the table.

Don’t
View rows 1-4 in the table.


Numbers 'out of'
Use ‘of’ rather than a forward slash ( / ) to show a number out of another number.

Do
Step 1 of 2

Don’t
Step 1/2


Numbers from 1,000
Use a comma to indicate the thousand in a number.

Do
4,500
10,000
1,250,000

Don’t
4500
10000
1250000


Spelling words
Use US English in UI copy and code. Check spellings in Merriam-Webster online dictionary.

Do
color
organization
labeled

Don’t
colour
organisation
labelled


Truncation
Ellipses (…) are used to show that text has been cut off — or truncated — when a message doesn’t fit in a given space.

Avoid truncation whenever possible: shorten UI messages or wrap the text.
Test your designs using multiple screen widths and magnification levels to ensure it doesn’t truncate.
If truncation can’t be avoided, for example in user-generated content or icon buttons, use a tooltip to display the full text for accessibility and usability.
In ADS components that truncate, the ellipsis appears without any space next to the last visible character (for example: Work in pro…).

Do
Shorten or wrap messages.


Don’t
Don’t truncate unless it can’t be avoided.


UI elements
Use sentence case, even if the UI element doesn’t use it.
Use bold to emphasize the UI element in a step.
If the UI element has an icon, bold both the name and the icon.
Avoid using a > symbol where possible, as it is read out as “greater than” by assistive technologies, leading to confusion. Use ‘then’ instead.
Do
Go to More, then Link work item.

Don’t
Go to More > Link Work Item.


Grammar

Active voice
Use active voice whenever possible as it improves readability and reflects Atlassian’s voice and tone.

Active voice:

puts the emphasis on the person or thing doing an action.
makes content shorter, clearer, friendlier, and more conversational.
Do
Administrators control access to Atlassian Cloud applications.

Don’t
Access to Atlassian Cloud applications is controlled by administrators.


Pronouns (you, your, we)
Minimize the use of pronouns.
Most of the time they can be avoided. However, when advising a user, indicating that something in the UI is theirs, or in error messages, you can use ‘you’ or ’your’ or ’we’ for a friendlier tone.
Do
Get access to your work items here.

Don’t
Get access to the work items here.

Do
Your projects

Don’t
My projects

Do
We couldn't load your page

Don’t
The page couldn't be loaded


Tense
Present tense helps make instructions and messages in the UI clear and engaging.

Do
We can’t load work item DSP-32113.

Don’t
We couldn’t load work item DSP-32113.

Do
Validation is required.

Don’t
Validation will be required.

Past tense can be used to communicate a completed action, like in error message headings and success flags, or where there could be confusion.

Do
Upload failed
File created

Don’t
Upload fail
File create


Punctuation

Apostrophes (')
Use an apostrophe to show possession. The apostrophe is placed before the ‘s’ for singular terms and after the ‘s’ for plurals.
If a word ends in an ‘s’ and is singular, add an ‘s after the ‘s’.
Use a curly apostrophe for better readability and to differentiate from code.
On a Mac: option + shift + ]
On Windows: Control + ' (or alt + 0146)
Do
A week’s time
Three weeks’ time
James’s work items

Don’t
A weeks time
Three week's time
James' work items


Colons (:)
Use colons to introduce a bulleted list or series of steps.
Don’t use colons at the end of headings.
Do
A password should have:
12 characters or more
at least one symbol and one number
a mix of capital and lowercase letters

Don’t
Turn on two-factor authentication:

Keep your account safe with an extra layer of security.



Commas (,)
Use an Oxford (or ‘serial’) comma to offset the final item in a list.

Do
Jira, Confluence, Loom, and Bitbucket are all Atlassian apps.

Don’t
Jira, Confluence, Loom and Bitbucket are all Atlassian apps.


Dashes (—) and hyphens (-)

Dashes
Use dashes in UI content sparingly. If using, use a spaced em dash.
In long-form content, use them sparingly to show an abrupt change in a sentence — like this. If the break happens in the middle of a sentence —  ike this — use spaced em dashes on either side of the phrase.
If possible, rewrite the sentence or make 2 sentences to avoid a dash. Clear, concise sentences are better for readability and accessibility.
Don't use a dash or hyphen for ranges of numbers. Use 'to' instead.
When adding the space, use non-breaking spaces (option + shift + space) to avoid the dash shifting to a new line.
To make an em dash:
On a Mac: option + shift + hyphen
On Windows: Control + Alt + - (or Alt + 0151)
Do
Jira Service Management belongs to Jira's family of apps. They’re all built on the same platform and share the same site URL.

Don’t
Jira Service Management belongs to Jira's family of apps — they’re all built on the same platform and share the same site URL.

Do
50 to 100

Don’t
50—100


Hyphens
If a noun is described by 2 or more words, use a hyphen to join those words together so they act as a compound adjective (or compound modifier).
Exceptions: don’t add a hyphen after the word ‘very’ or adverbs ending in -ly.
For specific hyphenated word guidance, check Vocabulary (Atlassians only).
Use a hyphen when not doing so could cause confusion or ambiguity. Consult the Merriam-Webster dictionary if you’re not sure.
Do
system-wide update
character-counter logic
widely communicated update
very cold drink
autocorrect
coworker
preexisting

Don’t
system wide update
character counter logic
widely-communicated update
very-cold drink
auto-correct
co-worker
pre-existing

Do
re-sign the document
re-create the page

Don’t
resign the document
recreate the page


Ellipses ( … )
Don’t put spaces in between the periods in an ellipsis.
Use the symbol for the ellipsis rather than a string of periods:
On a Mac: Option + ;
On Windows: Ctrl + Alt + . (or Alt + 0133)

Truncation
Ellipses can be used to show that text has been cut off — or truncated — when a message doesn’t fit in a given space. View truncation guidance.


Quotes
When using an ellipsis to omit part of a long quote, include spaces on either side of the ellipsis ( … ).
For example: “From medicine and space travel to disaster response … our products help teams all over the planet advance humanity through the power of software.” Atlassian: Discover our story.

Exclamation marks (!)
Avoid exclamation marks in UI copy and minimize their use in product marketing copy.
They can be considered for exciting or new things, but ask yourself if it’s really that exciting or if one is needed. Don’t use more than one exclamation mark per page.
Do
Project is complete.

Don’t
Project is complete!


Periods (.)
Use a period (full stop) at the end of complete sentences, including in helper text, messages, and notifications.
Don’t use periods in headers, titles, tooltips, field descriptions, and menu names, even if they are full sentences. While long content is discouraged, an exception is if these elements contain more than 1 sentence.
Only use periods in a bulleted list if the item is a complete sentence. Don’t add a period at the end of a list of fragments.
Add only one space after a period (full stop).
Do
Accessibility principles

Our principles cover the main requirements to design and build accessible experiences.


Don’t
Accessibility principles.

Our principles cover the main requirements to design and build accessible experiences.


If a link ends a sentence, include a period but don’t hyperlink it.

Do
Atlassian’s work is guided by 5 core values.

Don’t
Atlassian’s work is guided by 5 core values.


Quotation marks (‘’ | “”)
In the UI, use:

single curly quotes, unless you're writing in code or there’s a semantic reason to use straight quotes.
In body copy and long-form content, such as documentation and marketing, use:

double quotes (”“) for speech and direct quotes. Don’t use italics.
single quotes (‘’) to draw attention to a word you’re defining.
Do
“We have big things planned for the coming year,” said Mike.

Don’t
‘We have big things planned for the coming year,’ said Mike.

Do
They tried to avoid talking about the ‘big’ secret.

Don’t
They tried to avoid talking about the “big“ secret.


Emphasis
Don’t use quotation marks to emphasize UI elements, page titles, and other objects. Instead use bold.

Do
Go to Settings.

Don’t
Go to ‘Settings’.


Shortcuts
Mac
Double quotes:
opening marks: option + [
closing marks: option + shift + [
Single quotes:
opening marks: option + ]
closing marks: option + shift + ]
Windows
Double quotes:
opening marks: Alt + 0147
closing marks: Alt + 0148
Single quotes:
opening marks: Alt + 0145
closing marks: Alt + 0146
