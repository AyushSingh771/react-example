Mounting Life cycle

constructor() ==> static getDerivedStateFromProps() ==> render() ==> componentDidMount()

Update Life Cycle
static getDerivedStateFromProps() ==> shouldComponentUpdate() ==> render ==> getSnapshotBeforeUpdate()==> componentDidUpdate()

Unmount Life cycle
componentWillUnmount()

Constructor
The constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.

Typically, in React constructors are only used for two purposes:

Initializing local state by assigning an object to this.state.
Binding event handler methods to an instance.

componentDidMount
*It is invoked immediately after a component is mounted
*If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
\*This method is a good place to set up any subscriptions.

componentDidUpdate
it is invoked immediately after updating occurs. This method is not called for the initial render.

componentWillUnmount
it is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in.

shouldComponentUpdate
it is invoked before rendering when new props or state are being received.

getDerivedStateFromProps
it is run when the state depends on props get changes.
