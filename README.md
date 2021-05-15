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

      // if we dont want to return component but just execute some logic instead: 
      
      executeFunction();
      return <></>;
    }

    then use the HOC function; ex using in route:
    <Route path="/hoc-using" component={ withHOC(NormalComponent) } />
