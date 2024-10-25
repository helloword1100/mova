'use client'
import Layout from "../../../components/layout/layout";
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {  Search } from 'lucide-react'

const employees = [
  { id: 1, name: "Dummy name", email: "anna123@gmail.com", phone: "+987654323243", status: "Active", balance: "27k" },
  { id: 2, name: "Dummy name", email: "anna123@gmail.com", phone: "+987654323243", status: "Active", balance: "27k" },
  { id: 3, name: "Dummy name", email: "anna123@gmail.com", phone: "+987654323243", status: "Active", balance: "27k" },
  { id: 4, name: "Dummy name", email: "anna123@gmail.com", phone: "+987654323243", status: "Active", balance: "27k" },
  { id: 5, name: "Dummy name", email: "anna123@gmail.com", phone: "+987654323243", status: "Active", balance: "27k" },
  { id: 6, name: "Dummy name", email: "anna123@gmail.com", phone: "+987654323243", status: "Active", balance: "27k" },
  { id: 7, name: "Dummy name", email: "anna123@gmail.com", phone: "+987654323243", status: "Not Active", balance: "27k" },
  { id: 8, name: "Dummy name", email: "anna123@gmail.com", phone: "+987654323243", status: "Active", balance: "27k" },
  { id: 9, name: "Dummy name", email: "anna123@gmail.com", phone: "+987654323243", status: "Not Active", balance: "27k" },
  { id: 10, name: "Dummy name", email: "anna123@gmail.com", phone: "+987654323243", status: "Active", balance: "27k" },
  { id: 11, name: "Dummy name", email: "anna123@gmail.com", phone: "+987654323243", status: "Not Active", balance: "27k" },
]

export default function Employees() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Layout>
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Employees</h1>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Employees" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Employees</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Search keyword"
              className="pl-10 pr-4 py-2 w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
          Add Employee
        </Button>
      </div>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone Number</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.phone}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      employee.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {employee.status}
                    </span>
                  </TableCell>
                  <TableCell>{employee.balance}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="text-blue-600 hover:text-blue-800">
                        {employee.status === 'Active' ? 'Deactivate' : 'Activate'}
                      </Button>
                      <Button variant="outline" size="sm" className="text-blue-600 hover:text-blue-800">
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-800">
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
    </Layout>
  )
}