import React from "react";
import styled from "styled-components";

interface AvatarProps {}

export const Avatar: React.FC<AvatarProps> = (props) => {
    const contentData = require('../../data/structure.json');
    const contentStyle = contentData.style;
    const contentUser = contentData.user;
    const userString = contentUser.firstName?.charAt(0) + contentUser.middleName?.charAt(0) + contentUser.lastname?.charAt(0);
    console.log(userString);
    return (
        <StyledAvatar>
            {!contentStyle.avatar && <UserInitials>{userString}</UserInitials>}
            {contentStyle.avatar && <UserImage/>}
        </StyledAvatar>
    )
}

const StyledAvatar = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #00DBE5;
  background-color: #F2F7FF;
  overflow: hidden;
  box-shadow:  15px 15px 30px #CED3D9, -15px -15px 30px #F2F7FF;
`

const UserInitials = styled.div`
  font-size: 64px;
`

const UserImage = styled.div`
  background-image: url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFRUTFhcYFRgXFhkWFxcVGBgXGBUYFxUYHCggGBolGxMXIjIhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0lICUtLS0uLi0tLS8tLy0tLS0tLS0tLS0tLS0tLS0tLS0tMC0wLS0tLS0tLS8tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EAD4QAAEDAgMFBQYEAwgDAAAAAAEAAhEDIQQxQQUSUWFxBiKBkaETMlKxwfAjQtHhBxTxFRYkM3KSsuJiY4L/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQMEAgUG/8QANBEAAgECAwUHAgYCAwAAAAAAAAECAxEEITESQVFh8BNxgZGhscEi0QUyM0Lh8SOSFFJi/9oADAMBAAIRAxEAPwD4aiIgCIiAIiIAiIgCIiAIiIAiLYymTkEBrWVZ0dm2JcYjhf7+/HczcYDui/Enwz9LcVbCjKR01spOWVypDCQvbsO4CYVjTqaWgGCNb/Sy80xE/mE3EwcxBE/utEcLxZTKrFaFf/Lu4Lw5pGas3MM2yuDcWWtzBAJHThnH31USwtlqQqqZWorGrhxlEHKOEZqK+iRz6KmdCcNTtTi9DQiIqToIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIsoDCLKk4LDGo8N8+Q1QlJt2RnCYRzzbIZnl1Vs0btgO6DGd5gEn18IXrFVWt7jILWm0G4jLPO49VDFQhxJJcN7LMRYmf6LbQpWtJ9ZCtPs7wjrx+OmjNWpEDe4DwkHh9wsEGCItNje9xobrwX+WUZHkvQqgO70uERBmAOS07S3vrxu7GN366SQaXEAzl96ZZZ/Ja2XzbrfiL+ltVs3yAS2YiBbLgfXyQY12RI52zvqUbj+5/PuyEnuRmn3jc2gxI43NxmvEWHKTA5cojRbdyZI8PU/VeXQQbQdInO408FNuP9kJnkATYn0uY8tCvQbochy+YWGsdwsRln8vu6zv5yMxBkWHFE0uXmCLWw2ojpPnbNRCrhrQSYiNZMa2VfjKRDismIoJLaiXUql3ZkVFlFjLzCLKwgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAsrCygCIikBXGyKjGU3ucYJIaemeWuRVOrPZF5aG7xdkCJuL256eK4qZRuaML+ovH2NFZ4JJEx++vmpGCwdWoQGsJm0x9V9P7S7CwmBw7KDWNdXIBqvN+8RkBoB9AqLZ5FgLRwWvCTlWzeRFbC7O/rkacB2Kc+738x1Vnhv4f6l82sL/YU7C4iNVcUcYIF17NOmnuR51eNKMdX5nLnsSQcyBHlyy6KuxvZSBlfLP7niu5qV1CxNWVrjQhLJxR4lau6avGT8T5lisEabjJ8JjgRZRntIuAeYBjjr0XWdocLvAw0Egjw8Fz2JpuGQkdclixGHUG7adceuRuw+I7SKb1IzwSZFumf/fM88lrFQzANrZ8vqvbDeC3W3QcENaO7EnTL14hZm997GpcLGHGLRe0Z5TrHFYeBBnn5fNey7hlczzmJuvQJAuL/Q9LBTZMi5TELC3Vxc2jlMrSvJkrOxtTuERFBJhFlFAMIiIAiIgCIiAIiIAiIgCIiAIiIDKIikBZCwimwC6z+HmH9piqbYs14eejO/HT8Ncmu5/hEf8AGunL2L/m0T6nzWfFfoyZqwf68fH2Pfa3HOqYqoXTZ0CeCbIN1v2nXp1MRVLYjeKxg3hhPIBelgY2pw7kd4z9STvldl5RpGbBWeHo2VRs7ajCd0kDJTcbtmlTzcCeAuV7UJ5XPExCjfZbt3knEU4+/qo1QGLqqd2xmzWkczlCkf3ipuZ3m97lrzha6VVNfyeHicPd5X8jTWpk6KoxmAmYEjh9QrtuJa4S378Fqe1VzmpZM0U8PKEbp5nF4mlexuJUaq890xlPL7K6HamDHvDXPrr5qgrMNwb8OPVeZXpuDN1Gopow5/CbnOON48znzSi0eFteXD6KPJEgiQPJe21hwjxt4xfiqVUTeZpcXbIj450u+qirfinS7S3BaFhqu82aYK0UERFWdBERQDCLKwoAREQBERAEREAREQBEWUAREUgIiKUAiIgC7LsLjW4duIruEzT9m28e97xny6lccrvYjDVa7DiAXOa4HWBZwE63HkqcRFShZ6ZX7rmnCO1VNa2du+zsen45oksnxN5U7Z2PD3FpObVzdemGuI3g6Dm0kg8wSMlK2O0ms0NmVupVdlpRRnntVL7T1LDaTHyAJBCrxTqTEr6ZU7Ml9IPdEEfdlxW2tlup1CA7hE93qFurYaS+tN27zy6ONg5yoyykuNybsjs82p79YggTAfSaRnkDM5cVLxGyXUXbgqtIOTaoDSdbPBLHO5WVBQ2O11UEuYKe8Ce9Ji0gd3r5rrsNsjDVX/hhwkGQ134Yz7oHuu8fJXUIyatspeLv36GXFyUJJ7UnxyVr352t4ed2R8LTIdlB6qwe211b0uzzaTQROWsn+igY2nAWiVNJXudUa8pPZa69bFPiYIK5/FYfeIYwEuOQHE6clc46rAK39mKMv9pFwbKurNStF9I7VKUW5R8t1yvwnZKO9jK7aLBoCJ6SbKDtzZmGY0uwtb2oaRvNcQSATYtI0nTmrytt0e3dUxGF9q1jtxpMlrIO6ZaLTIN+a1doMJR9nUr0xusfR7ttXVGD0usVTYk7QVu+97cbvLw9TXQVSEX2ub5WSvwss+Gub4ceAJXlen5ryvN3mxBERQSERFDAWFlEBhERQAiIgCIiAIiIAsrCygCIikBERSgZWERSDK34eruuB6TrIm4I1UdClr5BScc0dH2qwNClVil7QBzGOh4abkZteDdp6DxVl/D3Zjn1HVo7rSGAn4iN4+QA8wtHait7d2Fp02lzzRpMaBm5zgIAHUhfQNlUqWHbTwtMgigIqOGT67r1ndARujkwKnBVJVIwvr9t56dSioYmdtFn4taHVGnFMNMERZcl2n2ZTqNlvvDjHourq4lj2tDSC4jKRbwVBtc2mOR4gr6ejPc958pisLtPtI5tPxtfVHAnANa67f0XW9nsWxlg1RfZh2ijPobhzXTaX5RCi1nUz4cjrcZtIREzwXM7TxYuVFr4o5SqrG1zkuZuyJpqKZGxeIBVnsfGim0m/wCvJUJElWuz3M32iod1g97p9wsqedzTHO51uF2TFGo6uI/mGwQWwQ5197dN4HOJXLdvsW1tNlJgLGGAxpsfZsnvOGm8509GhWm0+2eHZTdToy9xBHEcJJJXzva20H13mpUMk+gGQCprVacYuMHfrjr/AGWwpyvtSVr+tuvgr0RF5ppCIiAIiIAiIoBhERQAiIgCIiAIiIAsrCygCIikBZWEUoBFlYUgIiygOgwGNcBSqtJbUph1MO4S0hpHQPH+1eMNtmtRLgT715z8QcioeyDLiz4xbqP2JX0TE7PpUcF/LMpCrUqNAqOid12ZIOrhyyWOMpU6yp01dyeXc835ZnqP/Jh+1lKyis9+ay9UkziHY3FPO8x7o03ZXZdl8diq43ajSQPecQROgzXvYOy3NaGlrN6wDd9odu8d0mV09Oq2g0S0idYi9v1K+ko4XYtJTbfA+bljZuexOGzHi3m1wXfv5EOtgCwffkq3E2zV3U2rSeI3hr6Ln9r1ALgjwWuKUY3Znr1nOdoFZio0KqcRUkxwW3F4nWZ5DrCralb75KipUTIhBp6m5r9On36rXiu93TqtLH2va4jr/ReGVJdbMws1SScbGqknGRJobPAaSBxVDiGwfl5rtW04p+C57E4cNc0OEhwB/wBw3vQkjwVFXDqNorK/XyXRxO2ylRT8Xgd0bzTI4ahQFlnCUHaRfGakroIsrC5OgiIoAREUAwiIoAREQBERAEREAREQGURFICIilAIsopARFhAb8LV3XtdwI8tfRWm08bWfWdUBfNO8tnuAm9xkCT6qkV7s+u8Me5v5mt3wTdwYbxxsWmORVU0lNS8L8LtGijKTg4K/HLkn82PeBxFeqYaxziTmB594roGYLaTGDeqtLTk2o8vztYQSLc1U4TtSaYIaIkzlzByHQL1/eZ7zw56+A0Xsqph4pXk5Py8raLxPPlCtNZNRvn/299X3W7zxj8PiaLpeWnO7DvZ9Vf7DpOrt3ng7gO6OZGfgPqoex6VTG1PZizBBqPIsxvX4jeB+i7bF06dGlusAaym2AOA+pOfUqieIjB2i8t936J8/Rc7FuGwc5fXUSur2stebXLho3lpc3tGHNPd9hvNFiQwQufx/ZTCVDLHOpk+XkbKbgsXVczuuYANIW6niz+ZkkcF6agnG7XoeRUq2qOClmuef2OXq9iiT3cSzxF/+S9YTsU5jt51TeHJn1Diup/nKWrT4haqmLo8d0+LVDw8NWvf7nEcVUT2dfAqcbsMhn4bw4/CS0E9LzPguS23h3Np0y9pa5hdTdvCLNdvs6iKpH/yu6xQaWkh7j1cXDyMjdW7CVWVqIFZjXtiJcJgixDp4aFUYilGo4tSzV/Zr5v3l9BzjduL+eJ82pQ7unJ1vOy90tkMLZM73I+a7gdj8PUux5pnSHS2fGV4Z2GxIEtcx8TrEjkcvVWRpwf6iTE6kk7QbXmcX/YDSLPIPMAqDU2LVBix5yukxE0qppVAWPbmDnyXqu20rt4LD1FdK3c/7OFi60HZvzOQr4KozNviLhRYXYtEuvkBHnn9FB2tspm6XghsLHW/D7RcoPTczVSxqclGa1KNuFcW7+nz6LRCvHVmvAYwEhoj8unLeWGURZsXMT4/tIVMsGnbZfjxfItVd57S/rmUSLodoijkWiRwsVU1KA/I6eRsf3VFbDOm2k0+77FlOspq7TREReiIXlZi4IiIAiIgCIiALKwiAyiwsqUDKIvTGkkACSbADMldA8KThcM+o7dY0uPyHEk2A5lWY2QKZaaxk/mptMOHAOcRA5wo+P2g8j2YaKVPMMZkeBc7N55kqntdp2hnz3fz7czQ8P2avVy5b/HcvHPkHspUsyKtQaN/yx1dm/oIHNaH495cCXRFgAIDRwDRYKCiKHHPr0OHVf7clwXy9X1axNr0N0gnJ0/Y5K77N7JbiarabMzcn4QM3O5D6jiqnA4epXcyiwF73GGtH66C1zkBdfVtk4Cls2j7MEOrPg1XDU6AcGibDx6WU6jhlZN8/csVFVHe7UeXsvnkWNGhRwdEU6dmi5P5nu1cefyFlx3aDa76p3WWaDdTcbi3VTnmsYfBs/MtVHCXzk+vucYrH7K2YKy+OHcadmY8tFwrlu26YHetaSSLRxUdr6NMEktAHxLlNs7VY13cewjMD4ePhyW6rXlh4pKV+XTPGhhaeKm5zha2/pfc7CptinHuSOLLiFFZjqLjM34ZL5sdoOafw3EAczfw0C3Ybaz96XmZ9FnX4jU0Zevw3D3ul16o7ChjHsrndB3HSBrB/RXuzppOIIlj5IHPUeirtnbr6YLc8xzIVg53tacNMEiW8QR+6sXEuaIPaPZFQg1sG8jV1MZHiQNCuWw3aHGMdu+1IOtslb7I7WEPNOqN1zTB4EzB6Ky2xsRuJ3atAAPcYPAmDY9TrzXMYxm8jmU5wRyeIe+o8ve7ec7NxEkwIHoFIZvZTI6rTVpOY4seC1zTBB0K20HSV6dKKWSPNqybzYOJDT3pEn7uo+0Kwcb3a0b7ucZDxJ9FKxTwe7E8VSY2BTdGRqBg6MEn1JVeIqOMJb0ureduB1QipST0fWZb4JjXs3nNE6QIt4KPiXspXOd4BzJ/RSsM/cot5hc9tSqX1I4AD6/Vc4mt2VJNfmy9TqhTdSo1+3MjVKhe6Tcle24Y6mFsEMHFy8U5cbryY01f6s2ejtO2WSNgpg2mfvio9aiW9NCrCnThHkZK6eHi1zK1Us8ipRSK1KLjL5KOsEouLszQmnmgiIoJCIiAIiIAsrCygNtGk57g1oJc4wAMyV0uGpDCB5LR7VrD3yQdx5HdbTHG93eS5yjXc33TBOozjgOC9uxLnNhzieqrqQdT6dxqw9WFL6v3buC/nn5Gtx11zJ4nit9Cq33X3abjiFFevCskrlClsvI3VmCe7MaLUAvYdOa+j9guzDKQbjcVEm+HpnPlUcP8AiPHguW7LiyyFPtJZZLfwSLXstsZuzsP7SoP8XWbf/wBTDcN5HInnbRV+Lxu8TqTmVabXqF0vcbnTkuQr4ndJWqnR7NZ6vXrkcVa+09mH5Vkvv4ltQfButtXFDxXO1No8Foq4ou4zy/dW/wDI2VkZuw2neRnbGNgOm+8IgjXouYAVltai+QXZR1UTDkXnLdP7LE5XvI0tZqLI4CtMHsl77uO6PXyWNmNAvF+PDorVlfdBJyCshFPNlTujfsCt7Kq+lJt7snSOCtNhYsmpUpvJkOlnGHCfEGSo39iud7LEUXsquP8Amsa9pLR+WBOgzHJa9oTSxFCoRu743XDhB7s+B9EpYqntKKe+1vMt7JtXKPtTR3MQ4/FfxU3s72hrUMu/TycNQp/bXANFNr8i6o6/UW8O6FyeEqFroOvzV+zsVc3rvXMzuT2dPA7XtRtyjitx7GOFQCHONpHA8TOvVVeGMNLvJQKDJKsa4sBwXrUE4xuzzqzTdrGh1SA5x0BVXUbLKQ+IuJ81L2q+GBvFYpsl1Ef+B+YVNZbf+PuX+0lcsp/Stvv9EzZtapBDPhYB4qqYR3nnjZSdou3nuPP5KDWOTeCy4mpeo5c8vZF9CFoJdcTzO8ZKmUGqLSaphMBc0Fa7Z3Ue5Htz1pc9eXvWoXXU5nMYHslRntgraSm8qZpS1LVdEdERZCwIiIAiIgC20aZc4NGZMLKIdQV5JczpMThadNgDQDAuTmTqVz9doDraoiucUlc1YmWduBrdktKIuaiszHc7rs32Sa0NxGMs0jep0fzP1Bf8LeWZ5aydtbcc6oXOOtho0aAIiinFbCqb36dxqrPs32UdMvHvNGJ27vDnw+9FRYl5e6QiKZTcnZlKgo6G6jhtXKTSe3eA0F+vJEXE3bQ6grs1baxLC2MyouzNksqAgvIqkHcAgt3vytcc7m06LCLM7xi7HdZ7UkeNj7Mr1nFtNsbtnued1jP9Tjl0zVvgdqYbCV3Nq0G4xoG6S9wDJ1dTaAQRwJM9MkRXU6rjUy4GWcVUTjItKtTYuIuz2uCqaG+6TyguaB5Kvx/Z7EOH4VVuLpk90hwL+RBJ+vgiL3KFCnisqizWj3/b0Pn8fia2Akuyk2nulmiJtr+Z/l6dPEN3e84tBBD4baSdQd705rn6NMOMTcZDU9Dx5Iiz4ijCnUjFcvZdcD0sJiJ1qLqS1z072vgtdnGee6BJ5ZX4GVPciLfhZOVNX4mbEK0yk2lV3ngcFLY6H0/9Dh6LCLLCb25P/wBR90apRWylyfsyM/M9fooLW5koizVN3iXU9PI3YZuq9TJWEXaWSIerNTzvGNAvZCIqou92dy4Gp50CzuIi4Wdzp5H/2Q==");
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`


