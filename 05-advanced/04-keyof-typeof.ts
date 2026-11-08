const settings = { theme: "dark", pageSize: 20 };
type Settings = typeof settings;
type SettingKey = keyof Settings;
const key: SettingKey = "theme";
console.log(key);
