interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}
type User = { id: number; name: string };
const response: ApiResponse<User> = {
  success: true, data: { id: 1, name: "Rajesh" }, message: "Fetched"
};
console.log(response.data.name);
