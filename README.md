Demo authentication using React and Firebase

Stacks:
- React router; hooks
- Context API: manages and observes user data from server
- Firebase API
- HOC: check user sign in and hijack render 

Keynotes:
- HOC: a function receives a component and return an updated component 

Wrapped component ---------------> HOC --------------> Updated Component (Wrapped component with extra stuffs...)
  * steps to create an HOC:
    const withHOC = (WrappedComponent) => {

      // defines returned component here:
      
      const UpdatedComponent = (props) => {
         
         // do something...
         // then return the WrappedComponent with something changed (like props)
         
         return <WrappedComponent {...props} {...extra_props} />
      }

      // return the updated component
      
      return UpdatedComponent;

      ~~// if we dont want to return component but just execute some logic instead:~~
      
      ~~executeFunction();~~
      ~~return <></>;~~ 
      No we dont do like this (causing side effects in render-return phase -> anti pattern, this should return a pure function
    }

    then use the HOC function; ex using in route:
    <Route path="/hoc-using" component={ withHOC(NormalComponent) } />
    
    
** Update 16 May: I found a better solution for auth and routing - [stackoverflow link here](https://stackoverflow.com/questions/43164554/how-to-implement-authenticated-routes-in-react-router-4)
Description: we will build a <PrivateRoute /> component receiving a component then check if the user is logged in; if yes => return the WrappedComponent; else return the <Redirect /> to login page
 - PrivateRoute return a <Route {...rest} component={WrappedCompontent} /> if user is authenticated;

