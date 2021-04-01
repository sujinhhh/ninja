export const createProject = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        name: "sujin",
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT" });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR" });
      });
  };
};
