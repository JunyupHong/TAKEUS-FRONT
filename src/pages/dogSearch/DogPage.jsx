import React from "react";
import { DogCardContainer, PaginationNav, DogFilter } from "../../components";
import styled from "styled-components";

const DogPageWrap = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  .container-div {
    padding-bottom: 9.7rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.lightgray2};
  }
`;

const DogPage = () => {
  return (
    <DogPageWrap>
      <DogFilter />
      <div className="container-div">
        <DogCardContainer dogs={dogs} />
      </div>
      <PaginationNav />
    </DogPageWrap>
  );
};

const dogs = [
  {
    name: "세바스찬",
    gender: "남",
    organization: "15글자가넘어가면안된다고했다",
    age: 3,
    weight: 10.2,
    vaccination: true,
    neutralization: true,
    breed: "푸들",
    startingPoint: "인천국제공항",
    destination: "샌프란시스코",
    registrationDate: "2021-07-02",
    deadline: "2021-08-01",
    detail: "이러쿵저러쿵입니다.",
    user: "07xb259d1",
    status: false,
    photos: [
      "www.awss3ajdi.cjdgksd.com",
      "www.awss3ajdsjg.ckjsdlf.com",
      "www.awss3jdskgj.skljdf.com"
    ],
    contacts: "01089101879",
    reports: ["072xgjklbdjks2", "ashxon24nkgld2"]
  },
  {
    name: "엘리자베스2세",
    gender: "남",
    organization: "웰컴독코리아",
    age: 3,
    weight: 10.2,
    vaccination: true,
    neutralization: true,
    breed: "푸들",
    startingPoint: "인천국제공항",
    destination: "케네디",
    registrationDate: "2021-07-02",
    deadline: "2021-08-01",
    detail: "이러쿵저러쿵입니다.",
    user: "07xb259d1",
    status: false,
    photos: [
      "www.awss3ajdi.cjdgksd.com",
      "www.awss3ajdsjg.ckjsdlf.com",
      "www.awss3jdskgj.skljdf.com"
    ],
    contacts: "01089101879",
    reports: ["072xgjklbdjks2", "ashxon24nkgld2"]
  },
  {
    name: "5글자이름",
    gender: "남",
    organization: "동물권보호 카라",
    age: 3,
    weight: 10.2,
    vaccination: true,
    neutralization: true,
    breed: "푸들",
    startingPoint: "인천국제공항",
    destination: "LA국제공항",
    registrationDate: "2021-07-02",
    deadline: "2021-08-01",
    detail: "이러쿵저러쿵입니다.",
    user: "07xb259d1",
    status: false,
    photos: [
      "www.awss3ajdi.cjdgksd.com",
      "www.awss3ajdsjg.ckjsdlf.com",
      "www.awss3jdskgj.skljdf.com"
    ],
    contacts: "01089101879",
    reports: ["072xgjklbdjks2", "ashxon24nkgld2"]
  },
  {
    name: "멍뭉이",
    gender: "남",
    organization: "웰컴독코리아",
    age: 3,
    weight: 10.2,
    vaccination: true,
    neutralization: true,
    breed: "푸들",
    startingPoint: "인천국제공항",
    destination: "LA국제공항",
    registrationDate: "2021-07-02",
    deadline: "2021-08-01",
    detail: "이러쿵저러쿵입니다.",
    user: "07xb259d1",
    status: false,
    photos: [
      "www.awss3ajdi.cjdgksd.com",
      "www.awss3ajdsjg.ckjsdlf.com",
      "www.awss3jdskgj.skljdf.com"
    ],
    contacts: "01089101879",
    reports: ["072xgjklbdjks2", "ashxon24nkgld2"]
  },
  {
    name: "멍뭉이",
    gender: "남",
    organization: "웰컴독코리아",
    age: 3,
    weight: 10.2,
    vaccination: true,
    neutralization: true,
    breed: "푸들",
    startingPoint: "인천국제공항",
    destination: "LA국제공항",
    registrationDate: "2021-07-02",
    deadline: "2021-08-01",
    detail: "이러쿵저러쿵입니다.",
    user: "07xb259d1",
    status: false,
    photos: [
      "www.awss3ajdi.cjdgksd.com",
      "www.awss3ajdsjg.ckjsdlf.com",
      "www.awss3jdskgj.skljdf.com"
    ],
    contacts: "01089101879",
    reports: ["072xgjklbdjks2", "ashxon24nkgld2"]
  },
  {
    name: "멍뭉이",
    gender: "남",
    organization: "웰컴독코리아",
    age: 3,
    weight: 10.2,
    vaccination: true,
    neutralization: true,
    breed: "푸들",
    startingPoint: "인천국제공항",
    destination: "LA국제공항",
    registrationDate: "2021-07-02",
    deadline: "2021-08-01",
    detail: "이러쿵저러쿵입니다.",
    user: "07xb259d1",
    status: false,
    photos: [
      "www.awss3ajdi.cjdgksd.com",
      "www.awss3ajdsjg.ckjsdlf.com",
      "www.awss3jdskgj.skljdf.com"
    ],
    contacts: "01089101879",
    reports: ["072xgjklbdjks2", "ashxon24nkgld2"]
  },
  {
    name: "멍뭉이",
    gender: "남",
    organization: "웰컴독코리아",
    age: 3,
    weight: 10.2,
    vaccination: true,
    neutralization: true,
    breed: "푸들",
    startingPoint: "인천국제공항",
    destination: "LA국제공항",
    registrationDate: "2021-07-02",
    deadline: "2021-08-01",
    detail: "이러쿵저러쿵입니다.",
    user: "07xb259d1",
    status: false,
    photos: [
      "www.awss3ajdi.cjdgksd.com",
      "www.awss3ajdsjg.ckjsdlf.com",
      "www.awss3jdskgj.skljdf.com"
    ],
    contacts: "01089101879",
    reports: ["072xgjklbdjks2", "ashxon24nkgld2"]
  },
  {
    name: "멍뭉이",
    gender: "남",
    organization: "웰컴독코리아",
    age: 3,
    weight: 10.2,
    vaccination: true,
    neutralization: true,
    breed: "푸들",
    startingPoint: "인천국제공항",
    destination: "LA국제공항",
    registrationDate: "2021-07-02",
    deadline: "2021-08-01",
    detail: "이러쿵저러쿵입니다.",
    user: "07xb259d1",
    status: false,
    photos: [
      "www.awss3ajdi.cjdgksd.com",
      "www.awss3ajdsjg.ckjsdlf.com",
      "www.awss3jdskgj.skljdf.com"
    ],
    contacts: "01089101879",
    reports: ["072xgjklbdjks2", "ashxon24nkgld2"]
  },
  {
    name: "멍뭉이",
    gender: "남",
    organization: "웰컴독코리아",
    age: 3,
    weight: 10.2,
    vaccination: true,
    neutralization: true,
    breed: "푸들",
    startingPoint: "인천국제공항",
    destination: "LA국제공항",
    registrationDate: "2021-07-02",
    deadline: "2021-08-01",
    detail: "이러쿵저러쿵입니다.",
    user: "07xb259d1",
    status: false,
    photos: [
      "www.awss3ajdi.cjdgksd.com",
      "www.awss3ajdsjg.ckjsdlf.com",
      "www.awss3jdskgj.skljdf.com"
    ],
    contacts: "01089101879",
    reports: ["072xgjklbdjks2", "ashxon24nkgld2"]
  },
  {
    name: "멍뭉이",
    gender: "남",
    organization: "웰컴독코리아",
    age: 3,
    weight: 10.2,
    vaccination: true,
    neutralization: true,
    breed: "푸들",
    startingPoint: "인천국제공항",
    destination: "LA국제공항",
    registrationDate: "2021-07-02",
    deadline: "2021-08-01",
    detail: "이러쿵저러쿵입니다.",
    user: "07xb259d1",
    status: false,
    photos: [
      "www.awss3ajdi.cjdgksd.com",
      "www.awss3ajdsjg.ckjsdlf.com",
      "www.awss3jdskgj.skljdf.com"
    ],
    contacts: "01089101879",
    reports: ["072xgjklbdjks2", "ashxon24nkgld2"]
  },
  {
    name: "멍뭉이",
    gender: "남",
    organization: "웰컴독코리아",
    age: 3,
    weight: 10.2,
    vaccination: true,
    neutralization: true,
    breed: "푸들",
    startingPoint: "인천국제공항",
    destination: "LA국제공항",
    registrationDate: "2021-07-02",
    deadline: "2021-08-01",
    detail: "이러쿵저러쿵입니다.",
    user: "07xb259d1",
    status: false,
    photos: [
      "www.awss3ajdi.cjdgksd.com",
      "www.awss3ajdsjg.ckjsdlf.com",
      "www.awss3jdskgj.skljdf.com"
    ],
    contacts: "01089101879",
    reports: ["072xgjklbdjks2", "ashxon24nkgld2"]
  },
  {
    name: "멍뭉이",
    gender: "남",
    organization: "웰컴독코리아",
    age: 3,
    weight: 10.2,
    vaccination: true,
    neutralization: true,
    breed: "푸들",
    startingPoint: "인천국제공항",
    destination: "LA국제공항",
    registrationDate: "2021-07-02",
    deadline: "2021-08-01",
    detail: "이러쿵저러쿵입니다.",
    user: "07xb259d1",
    status: false,
    photos: [
      "www.awss3ajdi.cjdgksd.com",
      "www.awss3ajdsjg.ckjsdlf.com",
      "www.awss3jdskgj.skljdf.com"
    ],
    contacts: "01089101879",
    reports: ["072xgjklbdjks2", "ashxon24nkgld2"]
  },
  {
    name: "멍뭉이",
    gender: "남",
    organization: "웰컴독코리아",
    age: 3,
    weight: 10.2,
    vaccination: true,
    neutralization: true,
    breed: "푸들",
    startingPoint: "인천국제공항",
    destination: "LA국제공항",
    registrationDate: "2021-07-02",
    deadline: "2021-08-01",
    detail: "이러쿵저러쿵입니다.",
    user: "07xb259d1",
    status: false,
    photos: [
      "www.awss3ajdi.cjdgksd.com",
      "www.awss3ajdsjg.ckjsdlf.com",
      "www.awss3jdskgj.skljdf.com"
    ],
    contacts: "01089101879",
    reports: ["072xgjklbdjks2", "ashxon24nkgld2"]
  },
  {
    name: "멍뭉이",
    gender: "남",
    organization: "웰컴독코리아",
    age: 3,
    weight: 10.2,
    vaccination: true,
    neutralization: true,
    breed: "푸들",
    startingPoint: "인천국제공항",
    destination: "LA국제공항",
    registrationDate: "2021-07-02",
    deadline: "2021-08-01",
    detail: "이러쿵저러쿵입니다.",
    user: "07xb259d1",
    status: false,
    photos: [
      "www.awss3ajdi.cjdgksd.com",
      "www.awss3ajdsjg.ckjsdlf.com",
      "www.awss3jdskgj.skljdf.com"
    ],
    contacts: "01089101879",
    reports: ["072xgjklbdjks2", "ashxon24nkgld2"]
  },
  {
    name: "멍뭉이",
    gender: "남",
    organization: "웰컴독코리아",
    age: 3,
    weight: 10.2,
    vaccination: true,
    neutralization: true,
    breed: "푸들",
    startingPoint: "인천국제공항",
    destination: "LA국제공항",
    registrationDate: "2021-07-02",
    deadline: "2021-08-01",
    detail: "이러쿵저러쿵입니다.",
    user: "07xb259d1",
    status: false,
    photos: [
      "www.awss3ajdi.cjdgksd.com",
      "www.awss3ajdsjg.ckjsdlf.com",
      "www.awss3jdskgj.skljdf.com"
    ],
    contacts: "01089101879",
    reports: ["072xgjklbdjks2", "ashxon24nkgld2"]
  },
  {
    name: "멍뭉이",
    gender: "남",
    organization: "웰컴독코리아",
    age: 3,
    weight: 10.2,
    vaccination: true,
    neutralization: true,
    breed: "푸들",
    startingPoint: "인천국제공항",
    destination: "LA국제공항",
    registrationDate: "2021-07-02",
    deadline: "2021-08-01",
    detail: "이러쿵저러쿵입니다.",
    user: "07xb259d1",
    status: false,
    photos: [
      "www.awss3ajdi.cjdgksd.com",
      "www.awss3ajdsjg.ckjsdlf.com",
      "www.awss3jdskgj.skljdf.com"
    ],
    contacts: "01089101879",
    reports: ["072xgjklbdjks2", "ashxon24nkgld2"]
  }
];

export default DogPage;
