import { ApplicationState } from "../Redux/reducer/root_reducer";

const mapStateToProps = (state: ApplicationState) => ({
  authReducer: state.authReducer,
});

type GlobalProps = ReturnType<typeof mapStateToProps>;

export { mapStateToProps };
export type { GlobalProps };
