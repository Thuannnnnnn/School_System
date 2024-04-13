import React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [openDraw, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <nav className="bg-white dark:bg-gray-800  shadow py-4 ">
        <div className="px-8 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className=" flex items-center">
              <a className="flex-shrink-0" href="/">
                <img
                  className="w-8 h-8"
                  src="https://th.bing.com/th/id/OIP.nXiwCjPqfY93dzmNBiwcXAHaHa?rs=1&pid=ImgDetMain"
                  alt="Workflow"
                />
              </a>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  <NavLink
                    exact
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-black dark:text-white dark:hover:text-white px-3 py-2 rounded-md text-md font-bold"
                        : "text-gray-500 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/schdule"
                    className={({ isActive }) =>
                      isActive
                        ? "text-black dark:text-white dark:hover:text-white px-3 py-2 rounded-md text-md font-bold"
                        : "text-gray-500 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    }
                  >
                    Schdule
                  </NavLink>
                  <NavLink
                    to="/mark_report"
                    className={({ isActive }) =>
                      isActive
                        ? "text-black dark:text-white dark:hover:text-white px-3 py-2 rounded-md text-md font-bold"
                        : "text-gray-500 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    }
                  >
                    Mark Report
                  </NavLink>
                  <NavLink
                    to="/attendent_report"
                    className={({ isActive }) =>
                      isActive
                        ? "text-black dark:text-white dark:hover:text-white px-3 py-2 rounded-md text-md font-bold"
                        : "text-gray-500 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    }
                  >
                    Attendent Report
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="flex items-center ml-4 md:ml-6">
                <div className="relative ml-3">
                  <div className="relative inline-block text-left">
                    <div className="sm:hidden">
                      <img
                        className="w-12 h-12 rounded-full"
                        src="https://source.unsplash.com/grayscale-photography-of-man-wearing-crew-neck-shirt-jmURdhtm7Ng"
                        alt="pic"
                      />
                    </div>
                    <div className="hidden sm:block">
                      <React.Fragment>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                          }}
                        >
                          <Tooltip>
                            <IconButton
                              onClick={handleClick}
                              size="small"
                              sx={{ ml: 2 }}
                              aria-controls={open ? "account-menu" : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? "true" : undefined}
                            >
                              <Avatar sx={{ width: 48, height: 48 }}>
                                <img
                                  src="https://source.unsplash.com/grayscale-photography-of-man-wearing-crew-neck-shirt-jmURdhtm7Ng"
                                  alt="avatar"
                                ></img>
                              </Avatar>
                            </IconButton>
                          </Tooltip>
                        </Box>
                        <Menu
                          anchorEl={anchorEl}
                          id="account-menu"
                          open={open}
                          onClose={handleClose}
                          onClick={handleClose}
                          transformOrigin={{
                            horizontal: "right",
                            vertical: "top",
                          }}
                          anchorOrigin={{
                            horizontal: "right",
                            vertical: "bottom",
                          }}
                        >
                          <MenuItem onClick={handleClose}>My account</MenuItem>

                          <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                      </React.Fragment>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:hidden">
              <Button onClick={toggleDrawer(true)}>
                {" "}
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="w-8 h-8 menu-toggle1"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </Button>
              <Drawer open={openDraw} onClose={toggleDrawer(false)}>
                <div className="flex flex-col mt-12">
                  <NavLink
                    exact
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-black dark:text-white dark:hover:text-white px-3 py-2 rounded-md text-md font-bold"
                        : "text-gray-500 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/schdule"
                    className={({ isActive }) =>
                      isActive
                        ? "text-black dark:text-white dark:hover:text-white px-3 py-2 rounded-md text-md font-bold"
                        : "text-gray-500 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    }
                  >
                    Schdule
                  </NavLink>
                  <NavLink
                    to="/mark_report"
                    className={({ isActive }) =>
                      isActive
                        ? "text-black dark:text-white dark:hover:text-white px-3 py-2 rounded-md text-md font-bold"
                        : "text-gray-500 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    }
                  >
                    Mark Report
                  </NavLink>
                  <NavLink
                    to="/attendent_report"
                    className={({ isActive }) =>
                      isActive
                        ? "text-black dark:text-white dark:hover:text-white px-3 py-2 rounded-md text-md font-bold"
                        : "text-gray-500 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    }
                  >
                    Attendent Report
                  </NavLink>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      isActive
                        ? "text-black dark:text-white dark:hover:text-white px-3 py-2 rounded-md text-md font-bold"
                        : "text-gray-500 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    }
                  >
                    Profile
                  </NavLink>
                  <NavLink
                    to="/"
                    className="text-gray-500 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  >
                    Log Out
                  </NavLink>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
