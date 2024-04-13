import React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
                    <React.Fragment>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      >
                        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
                        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
                        <Tooltip title="Account settings">
                          <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? "account-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                          >
                            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
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
                        <MenuItem onClick={handleClose}>
                          <Avatar /> Profile
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Avatar /> My account
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                          Add another account
                        </MenuItem>
                        <MenuItem onClick={handleClose}>Settings</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </Menu>
                    </React.Fragment>
                  </div>
                </div>
              </div>
            </div>

            <div className=" md:hidden">
              <div class="flex -mr-2 md:hidden">
                <button
                  type="button"
                  className="menu-toggle1 text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                >
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
                </button>
              </div>

              <div className="absolute flex flex-col right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
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
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
