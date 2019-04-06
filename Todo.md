## TODO

- Investigate why the input fields are laggy on the results route. It is likely because of the fact that their state has to be updated twice before it reaches the actual inputs elements; once in the ResultsRouteContainer and then again in the SearchFormStateContainer. This is an artifact of the original implementation of SearchFormStateContainer, (to do with its ability to be either controlled or uncontrolled), but I should probably just refactor it such that it is always uncontrolled. This means that on the home route I need to create add the ability to manage the forms field values (either add to the main home component or create a component that will manage SearchFormStateContainer).

- Add the functionality to dynamically generate the options for the Category filter on the results route. Map over all of the current results and grab, say, the 3 most common categories present, besides the one searched for (which will be the most common).

- Potentially add shortlist functionality. 

- Potentially move some of the data that is currently being passed via props into context.

