import { useRef } from "react";
import { RootState } from "./state";
import { useAppDispatch, useAppSelector } from "./state/hooks";
import { User, addUser, removeUser } from "./state/slices/users";

function App() {
    const users = useAppSelector((state: RootState) => state.users.list);
    const dispatch = useAppDispatch();

    const inputs = useRef<User>({
        name: "",
        surnames: "",
        age: 0,
    });

    return (
        <div className="container">
            <main className="grid" style={{ marginTop: "3rem" }}>
                <div>
                    <h1>learning redux toolkit</h1>
                    <button
                        onClick={() =>
                            dispatch(
                                addUser({
                                    ...inputs.current,
                                })
                            )
                        }
                    >
                        añadir usuario
                    </button>

                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="name"
                        onChange={(e) => (inputs.current.name = e.target.value)}
                    />
                    <input
                        type="text"
                        name="surnames"
                        id="surnames"
                        placeholder="surnames"
                        onChange={(e) =>
                            (inputs.current.surnames = e.target.value)
                        }
                    />
                    <input
                        type="number"
                        name="age"
                        id="age"
                        placeholder="age"
                        onChange={(e) =>
                            (inputs.current.age = parseInt(e.target.value))
                        }
                    />
                </div>

                <div>
                    <ul>
                        {users.map((user) => {
                            return (
                                <li key={user.id} className="grid">
                                    <p>
                                        {user.name} {user.surnames} - {user.age}{" "}
                                        years
                                    </p>
                                    <button
                                        onClick={() =>
                                            dispatch(removeUser(user.id))
                                        }
                                    >
                                        eliminar
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </main>
        </div>
    );
}

export default App;
