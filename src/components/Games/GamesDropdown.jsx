import articlesGames from "#root/src/constants/articlesGames.js";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";

export default function GamesDropdown({}) {

    const [gameSearch, setGameSearch] = useState("");

    return (
        <Dropdown
            drop="up"
        >
            <Dropdown.Toggle variant="articles" size="sm" id="dropdown-basic">
                <i className="fad fa-joystick"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>

                <div className="px-2 mb-2 d-flex align-items-center">
                    <input
                        type="text"
                        placeholder="Search Games"
                        className="form-control form-control-sm"
                        value={gameSearch}
                        onChange={(e) => {
                            setGameSearch(e.target.value);
                        }}
                    />
                    {gameSearch && (
                        <i
                            className="fad fa-times-circle ms-2"
                            style={{ cursor: "pointer" }}
                            onClick={() => setGameSearch("")}
                        ></i>
                    )}
                </div>

                <div
                    style={{
                        maxHeight: "200px",
                        overflowY: "auto",
                    }}
                >
                    {articlesGames
                        .filter((game) =>
                            game.name.toLowerCase().includes(gameSearch.toLowerCase())
                        ).length > 0 ? (
                        articlesGames
                            .filter((game) =>
                                game.name.toLowerCase().includes(gameSearch.toLowerCase())
                            )
                            .map((game, index) => (
                                <Dropdown.Item
                                    key={index}
                                    // target="_blank"
                                    rel="noopener noreferrer"
                                    href={`${game.link}?utm_source=${window.location.hostname}&utm_medium=GamesDropdown`}
                                    className="d-flex align-items-center"
                                >
                                    <img
                                        src={game.image}
                                        alt={game.name}
                                        loading="lazy"
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                            objectFit: "cover",
                                            marginRight: "10px",
                                        }}
                                    ></img>
                                    {game.name}
                                </Dropdown.Item>
                            ))
                    ) : (
                        <div className="px-3 py-1 small text-center text-muted">
                            No results found
                        </div>
                    )}
                </div>

            </Dropdown.Menu>
        </Dropdown>
    )
}