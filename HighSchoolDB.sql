CREATE DATABASE IF NOT EXISTS HighSchoolDB;
USE HighSchoolDB;

-- 1. Tạo bảng thông tin lớp học (Classes)
CREATE TABLE Classes (
    ClassID INT AUTO_INCREMENT PRIMARY KEY,
    ClassName VARCHAR(50) NOT NULL,
    GradeLevel ENUM('10', '11', '12') NOT NULL,
    TeacherID INT
);

-- 2. Tạo bảng thông tin môn học (Subjects)
CREATE TABLE Subjects (
    SubjectID INT AUTO_INCREMENT PRIMARY KEY,
    SubjectName VARCHAR(50) NOT NULL,
    Credits INT NOT NULL,
    Description TEXT,
    IsMandatory BOOLEAN NOT NULL
);

-- 3. Tạo bảng thông tin giáo viên (Teachers)
CREATE TABLE Teachers (
    TeacherID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    BirthDate DATE,
    Gender ENUM('Nam', 'Nữ', 'Khác'),
    Phone VARCHAR(15),
    Email VARCHAR(50),
    HireDate DATE,
    SubjectID INT,
    FOREIGN KEY (SubjectID) REFERENCES Subjects(SubjectID)
);

-- 4. Cập nhật khóa ngoại cho bảng Classes
ALTER TABLE Classes ADD FOREIGN KEY (TeacherID) REFERENCES Teachers(TeacherID);

-- 5. Tạo bảng thông tin sinh viên (Students)
CREATE TABLE Students (
    StudentID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    BirthDate DATE,
    Gender ENUM('Nam', 'Nữ', 'Khác'),
    Address VARCHAR(100),
    Phone VARCHAR(15),
    Email VARCHAR(50),
    ClassID INT,
    EnrollmentDate DATE,
    FOREIGN KEY (ClassID) REFERENCES Classes(ClassID)
);

-- 6. Tạo bảng điểm (Grades)
CREATE TABLE Grades (
    GradeID INT AUTO_INCREMENT PRIMARY KEY,
    StudentID INT,
    SubjectID INT,
    Semester ENUM('1', '2') NOT NULL,
    Year INT NOT NULL,
    Grade DECIMAL(3,2) CHECK(Grade >= 0.0 AND Grade <= 10.0),
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    FOREIGN KEY (SubjectID) REFERENCES Subjects(SubjectID)
);

-- 7. Tạo bảng thời khóa biểu (Timetable)
CREATE TABLE Timetable (
    TimetableID INT AUTO_INCREMENT PRIMARY KEY,
    ClassID INT,
    SubjectID INT,
    DayOfWeek ENUM('Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'),
    StartTime TIME,
    EndTime TIME,
    Room VARCHAR(50),
    TeacherID INT,
    FOREIGN KEY (ClassID) REFERENCES Classes(ClassID),
    FOREIGN KEY (SubjectID) REFERENCES Subjects(SubjectID),
    FOREIGN KEY (TeacherID) REFERENCES Teachers(TeacherID)
);

-- 8. Tạo bảng điểm danh (Attendance)
CREATE TABLE Attendance (
    AttendanceID INT AUTO_INCREMENT PRIMARY KEY,
    StudentID INT,
    Date DATE,
    Status ENUM('Có mặt', 'Vắng mặt', 'Đi trễ', 'Miễn phép'),
    Remarks VARCHAR(100),
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID)
);

-- 9. Tạo bảng hoạt động ngoại khóa (Activities)
CREATE TABLE Activities (
    ActivityID INT AUTO_INCREMENT PRIMARY KEY,
    ActivityName VARCHAR(100) NOT NULL,
    Description TEXT,
    StartDate DATE,
    EndDate DATE,
    Organizer VARCHAR(100)
);

CREATE TABLE StudentActivities (
    StudentActivityID INT AUTO_INCREMENT PRIMARY KEY,
    StudentID INT,
    ActivityID INT,
    ParticipationDate DATE,
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    FOREIGN KEY (ActivityID) REFERENCES Activities(ActivityID)
);

-- 10. Tạo bảng thông tin phụ huynh (Parents)
CREATE TABLE Parents (
    ParentID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Phone VARCHAR(15),
    Email VARCHAR(50),
    Address VARCHAR(100)
);

CREATE TABLE StudentParents (
    StudentParentID INT AUTO_INCREMENT PRIMARY KEY,
    StudentID INT,
    ParentID INT,
    Relationship VARCHAR(50),
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    FOREIGN KEY (ParentID) REFERENCES Parents(ParentID)
);

-- 11. Tạo bảng kỳ thi (Examinations)
CREATE TABLE Examinations (
    ExamID INT AUTO_INCREMENT PRIMARY KEY,
    SubjectID INT,
    ClassID INT,
    ExamDate DATE,
    ExamType ENUM('Giữa kỳ', 'Cuối kỳ', 'Kiểm tra', 'Bài tập'),
    MaxMarks INT,
    FOREIGN KEY (SubjectID) REFERENCES Subjects(SubjectID),
    FOREIGN KEY (ClassID) REFERENCES Classes(ClassID)
);

CREATE TABLE ExamGrades (
    ExamGradeID INT AUTO_INCREMENT PRIMARY KEY,
    StudentID INT,
    ExamID INT,
    MarksObtained DECIMAL(5, 2),
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    FOREIGN KEY (ExamID) REFERENCES Examinations(ExamID)
);

-- 12. Tạo bảng thông báo (Notifications)
CREATE TABLE Notifications (
    NotificationID INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(100) NOT NULL,
    Content TEXT,
    TargetGroup ENUM('Students', 'Teachers', 'Parents', 'All'),
    CreatedDate DATE
);

-- 13. Tạo bảng sự kiện (Events)
CREATE TABLE Events (
    EventID INT AUTO_INCREMENT PRIMARY KEY,
    EventName VARCHAR(100) NOT NULL,
    Description TEXT,
    EventDate DATE,
    Organizer VARCHAR(100)
);

-- 14. Tạo bảng tài khoản người dùng (Users)
CREATE TABLE Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(50) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    Role ENUM('Student', 'Teacher', 'Parent', 'Admin'),
    AssociatedID INT,
    FOREIGN KEY (AssociatedID) REFERENCES Students(StudentID) ON DELETE CASCADE
);

-- Dữ liệu mẫu

-- Thêm lớp học
INSERT INTO Classes (ClassName, GradeLevel, TeacherID) VALUES 
('10A1', '10', NULL),
('11B2', '11', NULL),
('12C3', '12', NULL);

-- Thêm môn học
INSERT INTO Subjects (SubjectName, Credits, Description, IsMandatory) VALUES 
('Toán', 3, 'Môn Toán học', TRUE),
('Văn', 3, 'Môn Ngữ văn', TRUE),
('Anh Văn', 2, 'Môn Tiếng Anh', TRUE);

-- Thêm giáo viên
INSERT INTO Teachers (FirstName, LastName, BirthDate, Gender, Phone, Email, HireDate, SubjectID) VALUES 
('Nguyễn', 'Văn A', '1980-01-01', 'Nam', '0123456789', 'vana@example.com', '2005-09-01', 1),
('Trần', 'Thị B', '1982-02-02', 'Nữ', '0987654321', 'thib@example.com', '2007-09-01', 2),
('Lê', 'Văn C', '1985-03-03', 'Nam', '0912345678', 'vanc@example.com', '2010-09-01', 3);

-- Cập nhật TeacherID cho bảng Classes
UPDATE Classes SET TeacherID = 1 WHERE ClassID = 1;
UPDATE Classes SET TeacherID = 2 WHERE ClassID = 2;
UPDATE Classes SET TeacherID = 3 WHERE ClassID = 3;

-- Thêm sinh viên
INSERT INTO Students (FirstName, LastName, BirthDate, Gender, Address, Phone, Email, ClassID, EnrollmentDate) VALUES 
('Phạm', 'Văn D', '2006-05-05', 'Nam', 'Hà Nội', '0901234567', 'vand@example.com', 1, '2021-09-01'),
('Hoàng', 'Thị E', '2005-06-06', 'Nữ', 'Hà Nội', '0934567890', 'thie@example.com', 2, '2020-09-01'),
('Ngô', 'Văn F', '2004-07-07', 'Nam', 'Hà Nội', '0967890123', 'vanf@example.com', 3, '2019-09-01');
