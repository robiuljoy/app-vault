import { toast } from "react-toastify";

const STORAGE_KEY = "installedApps";

export const getInstalledApps = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveAppToDB = (app) => {
  const installed = getInstalledApps();
  const exists = installed.find((a) => a.id === app.id);

  if (exists) {
    toast.info(" App already installed!", {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });
    return false;
  }

  installed.push(app);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(installed));

  toast.success(" App Installed Successfully!", {
    position: "top-center",
    autoClose: 2000,
    theme: "colored",
  });

  return true;
};

export const removeAppFromDB = (id) => {
  const installed = getInstalledApps();
  const updated = installed.filter((app) => app.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  toast.warn(" App Uninstalled Successfully!", {
    position: "top-center",
    autoClose: 2000,
    theme: "colored",
  });
};
