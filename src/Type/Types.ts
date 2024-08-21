interface UserOpertunities {
  text: string;
  price: string;
}

interface UserActivities {
  activity: string;
  date: string;
  assignedUser: string;
}

export interface UserData {
  name: string;
  position: string;
  company: string;
  status: string;
  assignedTo: string;
  phone: string;
  email: string;
  address: string;
  userOpertunities: UserOpertunities[];
  userActivities: UserActivities[];
}